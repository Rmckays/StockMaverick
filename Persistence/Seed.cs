using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(StockAppContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Rustyn",
                        UserName = "rmckays",
                        Email = "rustyn@email.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Andy",
                        UserName = "andys",
                        Email = "andy@email.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Nataly",
                        UserName = "natalyvits",
                        Email = "nataly@email.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "P@$$w0rd");
                }
            }
        }
    }
}