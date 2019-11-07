using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Newtonsoft.Json.Linq;
using RestSharp;

namespace Application.Stock
{
    public class GetStockHistory
    {
        public class Query : IRequest<List<HistoricStock>>
        {
            public string Symbol { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<HistoricStock>>
        {

            public async Task<List<HistoricStock>> Handle(Query request, CancellationToken cancellationToken)
            {
                var apiKey = Environment.GetEnvironmentVariable("API_KEY");
                var client = new RestClient("https://cloud.iexapis.com/stable/stock/{symbol}");
                var restRequest = new RestRequest("/chart/1m", Method.GET);
                restRequest.AddParameter("symbol", request.Symbol, ParameterType.UrlSegment);
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddQueryParameter("token", apiKey);
                restRequest.RequestFormat = DataFormat.Json;

                var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);

                dynamic apiObjects = JArray.Parse(restResponse.Content);

                Console.WriteLine(apiObjects);

                var stocks =  new List<HistoricStock>();
                
                foreach (var api in apiObjects)
                {
                    var historicStock = new HistoricStock
                    {
                        Date = api.date,
                        ClosePrice = api.close,
                        Volume = api.volume,
                        Change = api.change
                    };
                    
                    stocks.Add(historicStock);
                }
                
                Console.WriteLine(stocks);

                return stocks;
            }
        }
    }
}