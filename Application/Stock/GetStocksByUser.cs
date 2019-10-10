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

namespace Application.Stock
{
    public class GetStocksByUser
    {
        public class Query : IRequest<List<PortfolioStock>>
        {
            
        }

        public class Handler : IRequestHandler<Query, List<PortfolioStock>>
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
            
            public async Task<List<PortfolioStock>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());

                var stocks = await _context.Stocks.Where(u => u.AppUser == user).ToListAsync();

                return stocks;
            }
        }
    }
}