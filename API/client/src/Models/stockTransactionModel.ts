export interface IStockTransaction {
    id: string;
    symbol: string;
    companyName: string;
    transactionDate: Date;
    purchasePrice: number;
    type: string;
    transactionPrice: number;
    yearHigh: number;
    transactionAmount: number;
}