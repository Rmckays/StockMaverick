import {observable} from "mobx";
import {IStockTransaction} from "../Models/stockTransactionModel";
import {IStock} from "../Models/stockModel";
import {RootStore} from "./rootStore";

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
}
