using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Persistence;
using RestSharp;

namespace Application.Stock
{
    public class SellStock
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            
            public int Amount { get; set; }
            
            public string Symbol { get; set; }
            
            public DateTime PurchaseDate { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly StockAppContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly UserManager<AppUser> _userManager;

            public Handler(StockAppContext context, IUserAccessor userAccessor, UserManager<AppUser> userManager)
            {
                _context = context;
                _userAccessor = userAccessor;
                _userManager = userManager;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());
                
                if (user == null)
                {
                    throw new Exception("User not found.");
                }
                
                var stock = await _context.Stocks
                    .Where(s => s.Symbol == request.Symbol).Where(u => u.AppUser == user)
                    .SingleOrDefaultAsync();
                
                if (stock == null)
                {
                    throw new Exception("Stocks not found.");
                }

                if (stock.Amount < request.Amount)
                {
                    throw new Exception("Insufficient Stock Amounts.");
                }
                
                var client = new RestClient("https://sandbox.iexapis.com/stable/stock/{symbol}");
                var restRequest = new RestRequest("/quote/latestprice", Method.GET);
                restRequest.AddParameter("symbol", stock.Symbol, ParameterType.UrlSegment);
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddQueryParameter("token", "Enter Your API Key Here");
                restRequest.RequestFormat = DataFormat.Json;
                
                var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);

                dynamic api = JObject.Parse(restResponse.Content);
                
                var currentPrice = api.latestPrice;
                
                var transactionPrice = (float) currentPrice * request.Amount ;
                
                var transaction = new Transaction
                {
                    TransactionDate = request.PurchaseDate,
                    TransactionAmount = request.Amount,
                    SellPrice = api.latestPrice,
                    AppUser = user,
                    Symbol = stock.Symbol,
                    TransactionPrice = transactionPrice,
                    Id = new Guid(),
                    CompanyName = api.companyName
                };

                if (stock.Amount == request.Amount)
                {
                    _context.Stocks.Remove(stock);
                }
                
                var walletTransaction = new WalletTransaction
                {
                    Id = new Guid(),
                    Type = "Stock Sale",
                    TransactionDate = request.PurchaseDate,
                    Amount = transactionPrice,
                    AppUser = user
                };
                
                stock.Amount = stock.Amount - request.Amount;
                user.CashAmount = user.CashAmount + transactionPrice;
                
                _context.Transactions.Add(transaction);
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }

        }
    }
}