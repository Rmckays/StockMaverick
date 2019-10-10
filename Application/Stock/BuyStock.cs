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
    public class BuyStock
    {
        public class Command : IRequest
        { 
            public string Symbol {get; set;}
            
            public Guid Id { get; set; }
            
            public int Amount { get; set; }
            
            public DateTime PurchaseDate { get; set; }
            
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly StockAppContext _context;
            private readonly UserManager<AppUser> _userManager;
            private readonly IUserAccessor _userAccessor;

            public Handler(StockAppContext context, UserManager<AppUser> userManager, IUserAccessor userAccessor)
            {
                _context = context;
                _userManager = userManager;
                _userAccessor = userAccessor;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());

                var portfolioStock = await _context.Stocks
                    .Where(s => s.Symbol == request.Symbol).Where(u => u.AppUser == user)
                    .SingleOrDefaultAsync();

                var client = new RestClient("https://sandbox.iexapis.com/stable/stock/{symbol}");
                var restRequest = new RestRequest("/quote/latestprice", Method.GET);
                restRequest.AddParameter("symbol", request.Symbol, ParameterType.UrlSegment);
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddQueryParameter("token", "Enter Your API Key Here");
                restRequest.RequestFormat = DataFormat.Json;
                var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);

                dynamic api = JObject.Parse(restResponse.Content);

                var transactionPrice = (float) api.latestPrice * request.Amount ;

                Console.WriteLine(transactionPrice);

                if (portfolioStock == null)
                {
                    var stock = new PortfolioStock
                    {
                        PurchaseDate = request.PurchaseDate,
                        Amount = request.Amount,
                        Symbol = api.symbol,
                        CompanyName = api.companyName,
                        Exchange = api.primaryExchange,
                        Price = transactionPrice,
                        YearHigh = api.week52High,
                        Id = request.Id,
                        AppUser = user
                    };

                    Console.WriteLine("New Stock was added");
                    _context.Stocks.Add(stock);
                }
                else
                {
                    portfolioStock.Amount += request.Amount;
                    portfolioStock.PurchaseDate = request.PurchaseDate;
                    portfolioStock.Price = transactionPrice;
                    Console.WriteLine("Your Stock was Updated");
                    _context.Stocks.Update(portfolioStock);
                }

                var transaction = new Transaction
                {
                    TransactionDate = request.PurchaseDate,
                    TransactionAmount = request.Amount,
                    PurchasePrice = api.latestPrice,
                    AppUser = user,
                    Symbol = request.Symbol,
                    TransactionPrice = transactionPrice,
                    Id = new Guid(),
                    CompanyName = api.companyName
                };
                
                var cost = transactionPrice * request.Amount;
//                _context.Stocks.Add(stock);
                user.CashAmount = user.CashAmount - cost;
                
                
                _context.Transactions.Add(transaction);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                
                throw new Exception("Problem Buying Stock");
            }
        }
    }
}