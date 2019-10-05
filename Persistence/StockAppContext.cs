using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class StockAppContext : IdentityDbContext<AppUser>
    {
        public StockAppContext(DbContextOptions<StockAppContext> options) : base(options)
        {

        }
        
        public DbSet<PortfolioStock> Stocks { get; set; }
        
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
