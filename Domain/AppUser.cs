using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser: IdentityUser
    {
        public double PortfolioAmount { get; set; }
        
        public string DisplayName { get; set; }
    }
}