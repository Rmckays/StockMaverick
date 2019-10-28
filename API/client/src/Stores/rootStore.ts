import StockStore from "./stockStore";
import UserStore from "./userStore";
import {createContext} from "react";

export class RootStore {
    stockStore: StockStore;
    userStore: UserStore;

    constructor(){
        this.stockStore = new StockStore(this);
        this.userStore = new UserStore(this);
    }
}

export default createContext(new RootStore());