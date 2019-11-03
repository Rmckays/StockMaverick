import {action, observable, runInAction} from "mobx";
import {IStockTransaction} from "../Models/stockTransactionModel";
import {IStock} from "../Models/stockModel";
import {RootStore} from "./rootStore";
import agent from "../API/agent";
import {IWalletTransaction} from "../Models/walletTransactionModel";

export default class StockStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable stocks: IStock[] = [

        ];
    @observable stockSearchSymbol: string = '';
    @observable stockQuery: string = '';
    @observable stockQueryHistory: [] = [];

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
}
