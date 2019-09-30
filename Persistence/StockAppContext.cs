using System;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class StockAppContext : DbContext
    {
        public StockAppContext(DbContextOptions<StockAppContext> options) : base(options)
        {
            
        }
    }
}
