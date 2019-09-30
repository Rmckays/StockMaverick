using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Stock
    {
        public Guid Id { get; set; }
        
        [Required]
        public string Symbol { get; set; }
        
        [Required]
        public string CompanyName { get; set; }
        
        public string Exchange { get; set; }
        
        public DateTime PurchaseDate { get; set; }
        
        public double Price { get; set; }
        
        public double YearHigh { get; set; }
        
        public int Amount { get; set; }
        
        [Required]
        public AppUser AppUser { get; set; }
    }
}
