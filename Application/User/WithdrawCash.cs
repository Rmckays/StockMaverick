using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.User
{
    public class WithdrawCash
    {
        public class Command : IRequest
        {
            public float Amount { get; set; }
        }
        
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Amount).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IUserAccessor _userAccessor;
            private readonly StockAppContext _context;


            public Handler(UserManager<AppUser> userManager, IUserAccessor userAccessor, StockAppContext context)
            {
                _userManager = userManager;
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());
                
                if (user == null)
                {
                    Console.Write("User is Null");
                    throw new RestException(HttpStatusCode.Unauthorized);
                }

                var walletTransaction = new WalletTransaction
                {
                    Id = new Guid(),
                    Type = "Withdrawal",
                    TransactionDate = DateTime.Now,
                    Amount = -request.Amount,
                    AppUser = user
                };

                user.CashAmount = user.CashAmount - request.Amount;

                _context.WalletTransactions.Add(walletTransaction);
                    
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                
                throw new Exception("Problem Withdrawing Funds");
            }
        }
    }
}