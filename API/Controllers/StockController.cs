using System.Threading.Tasks;
using Application.Stock;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stock = Application.Stock.Stock;

namespace API.Controllers
{
    public class StockController : BaseController
    {


        [HttpGet("{symbol}")]

        public async Task<ActionResult<Stock>> GetStock(string symbol)
        {
            return await Mediator.Send(new GetStock.Query {Symbol = symbol});
        }

    }
}