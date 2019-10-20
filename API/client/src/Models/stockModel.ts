export interface IStock {
    symbol: string;
    companyName: string;
    openPrice: number;
    closePrice: number | null;
    priceChange: number | null;
    volume: number;
    yearlyHigh: number;
    yearlyLow: number;
}