using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
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

                var client = new RestClient("https://sandbox.iexapis.com/stable/stock/{symbol}");
                var restRequest = new RestRequest("/quote/latestprice", Method.GET);
                restRequest.AddParameter("symbol", request.Symbol, ParameterType.UrlSegment);
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddQueryParameter("token", "Enter Your API Key Here");
                restRequest.RequestFormat = DataFormat.Json;
                var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);

                dynamic api = JObject.Parse(restResponse.Content);

                var stock = new PortfolioStock
                {
                    PurchaseDate = request.PurchaseDate,
                    Amount = request.Amount,
                    Symbol = api.symbol,
                    CompanyName = api.companyName,
                    Exchange = api.primaryExchange,
                    Price = api.latestPrice,
                    YearHigh = api.week52High,
                    Id = request.Id,
                    AppUser = user
                };
                
                var cost = (float) stock.Price * request.Amount;
                user.CashAmount = user.CashAmount - cost;
                
                _context.Stocks.Add(stock);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                
                throw new Exception("Problem Buying Stock");
            }
        }
    }
}