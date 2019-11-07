using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Newtonsoft.Json.Linq;
using RestSharp;


namespace Application.Stock
{
    public class GetStock
    {
        public class Query : IRequest<Stock>
        {
            public string Symbol { get; set; }
        }

        public class Handler : IRequestHandler<Query, Stock>
        {


            public async Task<Stock> Handle(Query request, CancellationToken cancellationToken)
            {
                
                var apiKey = Environment.GetEnvironmentVariable("API_KEY");
                
                var client = new RestClient("https://cloud.iexapis.com/stable/stock/{symbol}");
                var restRequest = new RestRequest("/quote/latestprice", Method.GET);
                restRequest.AddParameter("symbol", request.Symbol, ParameterType.UrlSegment);
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddQueryParameter("token", apiKey);
                restRequest.RequestFormat = DataFormat.Json;
                var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);

                Console.WriteLine(restResponse.Content);
                
                
                dynamic api = JObject.Parse(restResponse.Content);

                
                var stock = new Stock
                {
                    Symbol = api.symbol,
                
                    CompanyName = api.companyName,
                
                    PrimaryExchange = api.primaryExchange,
                    
                    OpenPrice = api.latestPrice,
                    
                    ClosePrice = api.previousClose,
                    
                    Volume = api.previousVolume,
                    
                    YearlyHigh = api.week52High,
                    
                    YearlyLow = api.week52Low,
                    
                    PriceChange = api.change
                };
                
                return stock;

            }
            
        }
    }
}