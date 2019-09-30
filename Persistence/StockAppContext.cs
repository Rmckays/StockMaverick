using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class StockAppContext : DbContext
    {
        public StockAppContext(DbContextOptions<StockAppContext> options) : base(options)
        {

        }
        
        public DbSet<Stock> Stocks { get; set; }
    }
}
