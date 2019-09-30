using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser: IdentityUser
    {
        public double PortfolioAmount { get; set; }
        
        public double CashAmount { get; set; }
        
        public string DisplayName { get; set; }
    }
}