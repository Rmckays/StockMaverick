import {action, observable} from "mobx";
import {IStockTransaction} from "../Models/stockTransactionModel";
import {IStock} from "../Models/stockModel";
import {RootStore} from "./rootStore";
import agent from "../API/agent";

export default class StockStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable stockTransactions: IStockTransaction[] = [];
    @observable stocks: IStock[] = [];
    @observable stockSearchSymbol: string = '';
    @observable stockQuery: string = '';
    @observable stockQueryHistory: [] = [];

    @action loadStocks = () => {
        agent.Stocks.getStocksByUser()
            .then(stocks => {
                    console.log(stocks);
                });
            };
}
