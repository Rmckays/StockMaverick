using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Stock
{
    public class SellStock
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            
            public int Amount { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly StockAppContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly UserManager<AppUser> _userManager;

            public Handler(StockAppContext context, IUserAccessor userAccessor, UserManager<AppUser> userManager)
            {
                _context = context;
                _userAccessor = userAccessor;
                _userManager = userManager;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var stockTransaction = _context.Stocks.FindAsync(request.Id);
                
                if (stockTransaction == null)
                {
                    throw new Exception("Stocks not found.");
                }

                Console.WriteLine(stockTransaction);

//                _context.Stocks.Update();
//                
//                var user= await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());
//
//                var success = await _context.SaveChangesAsync() > 0;
//
//                if (success) return Unit.Value;
//
//                throw new Exception("Problem saving changes");
                return Unit.Value;
            }

        }
    }
}