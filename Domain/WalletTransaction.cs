using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class WalletTransaction
    {
        public Guid Id { get; set; }
        
        public string Type { get; set; }

        public DateTime TransactionDate { get; set; }

        public float Amount { get; set; }
        
        [Required]
        public AppUser AppUser { get; set; }
    }
}