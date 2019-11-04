import {action, observable, runInAction} from "mobx";
import {IStock} from "../Models/stockModel";
import {RootStore} from "./rootStore";
import agent from "../API/agent";
import {IStockHistory} from "../Models/stockHistory";

export default class StockStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable stocks: IStock[] = [];
    @observable stockSearchSymbol: string = '';
    @observable stockQuery: string = '';
    @observable stockQueryHistory: IStockHistory[] = [];
    @observable loadingHistory = true;

    @action loadStocks = () => {
        agent.Stocks.getStocksByUser()
            .then(stocks => {
                const retrievedStocks = stocks.map(stock => {
                    const newStock: IStock = {
                        id: stock.id,
                        symbol: stock.symbol,
                        companyName: stock.companyName,
                        purchaseDate: stock.purchaseDate,
                        price: stock.price,
                        yearHigh: stock.yearHigh,
                        amount: stock.amount
                    };
                    return newStock;
                });
                runInAction(() => {
                    this.stocks = retrievedStocks;
                });
            });
    };

    @action loadStockHistory = async () => {
        await agent.Stocks.getStockHistory(this.stockQuery)
            .then(stockHistory => {
                const retrievedStockHist = stockHistory.map(stockHistory => {
                    const newStockHist: IStockHistory = {
                        date: stockHistory.date,
                        closePrice: stockHistory.closePrice,
                        volume: stockHistory.volume,
                        change: stockHistory.change
                    };
                    return newStockHist;
                });
                runInAction(() => {
                    this.stockQueryHistory = retrievedStockHist;
                    console.log("Stock Query Hist", this.stockQueryHistory)
                    this.loadingHistory = false;
                })
            })
    }

    @action loadQuerySymbol = (value: any) => {
        runInAction(() => {
            console.log(value);
            this.stockQuery = value;
        })
    }

    @action closeQuery = () => {
        runInAction(() => {
                this.stockQueryHistory = [];
                this.loadingHistory = true;
            }
        );

    }
}
