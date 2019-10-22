import {createContext} from "react";
import {observable} from "mobx";
import {IStockTransaction} from "../Models/stockTransactionModel";
import {IStock} from "../Models/stockModel";

class stockStore {
    @observable stockTransactions: IStockTransaction[] = [];
    @observable stocks: IStock[] = [];
    @observable stockSearchSymbol: string = '';
    @observable stockQuery: string = '';
    @observable stockQueryHistory: [] = [];
}

export default createContext(new stockStore());