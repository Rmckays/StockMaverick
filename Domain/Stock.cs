using System;

namespace Domain
{
    public class Stock
    {
        public string Symbol { get; set; }
        
        public string CompanyName { get; set; }
        
        public string Exchange { get; set; }
        
        public DateTime PurchaseDate { get; set; }
        
        public double Price { get; set; }
        
        public double YearHigh { get; set; }
        
        public int Amount { get; set; }
    }
}
