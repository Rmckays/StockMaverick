using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Wallet;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TransactionsController : BaseController
    {
        [HttpGet("wallet")]

        public async Task<ActionResult<List<WalletTransaction>>> GetWalletTransactionsByUser()
        {
            return await Mediator.Send(new GetWalletTransactionsByUser.Query());
        }

        [HttpGet("stocks")]

        public async Task<ActionResult<List<Transaction>>> GetStockTransactionsByUser()
        {
            return await Mediator.Send(new GetStockTransactionsByUser.Query());
        }
        
        
    }
}