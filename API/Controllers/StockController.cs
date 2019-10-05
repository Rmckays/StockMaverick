using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Stock;
using Domain;
using MediatR;
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

        [HttpGet("history/{symbol}")]

        public async Task<ActionResult<List<HistoricStock>>> GetStockHistory(string symbol)
        {
            return await Mediator.Send(new GetStockHistory.Query {Symbol = symbol});
        }

        [HttpPost("buy/{symbol}")]

        public async Task<ActionResult<Unit>> BuyStock(string symbol,  BuyStock.Command command)
        {
            command.Symbol = symbol;
            
            return await Mediator.Send(command);
        }

    }
}