import StockStore from "./stockStore";
import UserStore from "./userStore";
import {createContext} from "react";
import {configure} from "mobx";
import transactionStore from "./transactionStore";
import TransactionStore from "./transactionStore";

configure({enforceActions: 'always'});

export class RootStore {
    stockStore: StockStore;
    userStore: UserStore;
    transactionStore: transactionStore;

    constructor(){
        this.stockStore = new StockStore(this);
        this.userStore = new UserStore(this);
        this.transactionStore = new TransactionStore(this);
    }
}

export default createContext(new RootStore());