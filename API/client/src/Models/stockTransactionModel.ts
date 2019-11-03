export interface IStockTransaction {
    id: string;
    symbol: string;
    companyName: string;
    transactionDate: Date;
    purchasePrice: number;
    transactionPrice: number;
    yearHigh: number;
    transactionAmount: number;
}