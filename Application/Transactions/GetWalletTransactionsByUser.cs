using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Wallet
{
    public class GetWalletTransactionsByUser
    {

        public class Query : IRequest<List<WalletTransaction>>
        {
            
        }

        public class Handler : IRequestHandler<Query, List<WalletTransaction>>
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

            public async Task<List<WalletTransaction>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());

                var transactions = await _context.WalletTransactions.Where(u => u.AppUser == user).ToListAsync();

                return transactions;
            }
        }
    }
}