using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Transaction
    {
        public Guid Id { get; set; }
        
        [Required]
        public string Symbol { get; set; }
        
        [Required]
        public string CompanyName { get; set; }
        
        public string Type { get; set; }

        public DateTime TransactionDate { get; set; }
        
        public float PurchasePrice { get; set; }
        
        public float SellPrice { get; set; }
        
        public float TransactionPrice { get; set; }

        public int TransactionAmount { get; set; }
        
        [Required]
        public AppUser AppUser { get; set; }
    }
}