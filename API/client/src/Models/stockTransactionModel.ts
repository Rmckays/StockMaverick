export interface IStockTransaction {
    id: string;
    symbol: string;
    companyName: string;
    purchaseDate: Date;
    purchasePrice: number;
    price: number;
    yearHigh: number;
    amount: number;
}