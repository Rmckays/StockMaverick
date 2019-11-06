import {action, observable, runInAction} from "mobx";
import {IStock} from "../Models/stockModel";
import {RootStore} from "./rootStore";
import agent from "../API/agent";
import {IStockHistory} from "../Models/stockHistory";
import {IStockQuery} from "../Models/stockQuery";
import {history} from "../index";

export default class StockStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable stocks: IStock[] = [];
    @observable stockTransaction: IStockQuery = {amount: 0, symbol: ''};
    @observable stockQuery: string = '';
    @observable stockQueryHistory: IStockHistory[] = [];
    @observable loadingHistory = true;
    @observable transactionMade = false;

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
    };

    @action loadQuerySymbol = (value: any) => {
        runInAction(() => {
            console.log(value);
            this.stockQuery = value;
        })
    };

    @action loadStockAmount = (value: number) => {
        runInAction(() => {
            this.stockTransaction.amount = value;
            this.stockTransaction.symbol = this.stockQuery;
        });
    };

    @action closeQuery = () => {
        runInAction(() => {
                this.stockQueryHistory = [];
                this.loadingHistory = true;
            }
        );
    };

    @action sellStocks = async (values: IStockQuery) => {
        console.log(this.stockQuery);
        console.log(values);
        await agent.Stocks.sellStocks(this.stockQuery, values)
            .then(() => {
                console.log("Stock Sale Was Successful");
                runInAction(() => {
                    this.transactionMade = true;
                });
            })
            .catch(error => {console.log(error)});

    }

    @action resetTransaction = () => {
        runInAction(() => {
            this.transactionMade = false;
        })
    }
}
