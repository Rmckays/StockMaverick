using System;

using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser: IdentityUser
    {
        public float PortfolioAmount { get; set; }
        
        public float CashAmount { get; set; }
        
        public string DisplayName { get; set; }
        
    }
}