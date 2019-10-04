namespace Application.Stock
{
    public class Stock
    {
        public string Symbol { get; set; }
        
        public string CompanyName { get; set; }
        
        public string PrimaryExchange { get; set; }
        
        public float OpenPrice { get; set; }
        
        public float ClosePrice { get; set; }
        
        public float PriceChange { get; set; }
        
        public int Volume { get; set; }
        
        public float YearlyHigh { get; set; }
        
        public float YearlyLow { get; set; }
    }
}