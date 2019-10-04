using System;
using RestSharp;
using RestSharp.Authenticators;

namespace Application.Stock
{
    public class IEXStockAPI
    {
        private const string BaseUrl = "https://cloud.iexapis.com/stable/stock/aapl/quote/latestprice";

        private readonly IRestClient _client;
        
        private const string ApiKey = "";

        public IEXStockAPI(string ApiKey)
        {
            _client = new RestClient(BaseUrl);
            _client.Authenticator = new OAuth2AuthorizationRequestHeaderAuthenticator(ApiKey);
        }

        public T Execute<T>(RestRequest request) where T : new()
        {
            request.AddHeader("API_KEY", ApiKey);
            var response = _client.Execute<T>(request);

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