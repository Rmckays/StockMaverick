using System;
using System.Threading;
using System.Threading.Tasks;
//using Newtonsoft.Json.Linq;
   //using RestSharp;
   //
   //namespace Application.Stock
   //{
   //    public class IEXStockAPI
   //    {
   //        public async Task<>Execute(RestRequest request)
   //        {
   //            var client = new RestClient("https://cloud.iexapis.com/stable/stock/");
   //            var restRequest = new RestRequest("{symbol}/quote/latestprice", Method.GET);
   //            restRequest.AddParameter("symbol", request.Symbol);
   //            restRequest.AddHeader("Content-Type", "application/json");
   //            restRequest.AddQueryParameter("token", "pk_04ed137e3f134c6ebcc3ce81c314b60d");
   //            restRequest.RequestFormat = DataFormat.Json;
   //                
   //            var restResponse = await client.ExecuteTaskAsync(restRequest, CancellationToken.None);
   //
   //            dynamic apiData = JObject.Parse(restResponse.Content);
   //
   //            if (restResponse.ErrorException != null)
   //            {
   //                const string message = "Error retrieving your stock.";
   //                var IEXException = new Exception(message, restResponse.ErrorException);
   //                throw IEXException;
   //            }
   //
   //            return apiData;
   //        }
   //    }
   //}