using System;
using RestSharp;
using RestSharp.Authenticators;

namespace Application.Stock
{
    public class IEXStockAPI
    {
//        private const string BaseUrl = "https://cloud.iexapis.com/stable/stock/[symbol]/quote/latestprice";
//
//        private readonly IRestClient _client;
//        
//        private const string ApiKey = "";
//
//        public IEXStockAPI(string ApiKey)
//        {
//            _client = new RestClient(BaseUrl);
//
//        }

        public T Execute<T>(RestRequest request) where T : class, new()
        {
            var client = new RestClient("https://cloud.iexapis.com/stable/stock/aapl/quote/latestprice");
            request.Method = Method.GET;
            request.AddHeader("Content-Type", "application/json");
            request.AddHeader("token", "********");
            
            var response = client.Execute<T>(request);

            if (response.ErrorException != null)
            {
                const string message = "Error retrieving your stock.";
                var IEXException = new Exception(message, response.ErrorException);
                throw IEXException;
            }

            return response.Data;
        }
    }
}