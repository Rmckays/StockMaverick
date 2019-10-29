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
    @observable stocks: IStock[] = [
        {
            id: 'asdfa12312',
            symbol: 'AAPL',
            companyName: 'Apple Inc.',
            purchaseDate: new Date(),
            price: 315.66,
            yearHigh: 356.12,
            amount: 50
        },
        {
            id: 'asdfa12312',
            symbol: 'TESL',
            companyName: 'Tesla Inc.',
            purchaseDate: new Date(),
            price: 315.66,
            yearHigh: 356.12,
            amount: 15
        },
        {
            id: 'asghlko672312',
            symbol: 'GOOGL',
            companyName: 'Alphabet',
            purchaseDate: new Date(),
            price: 315.66,
            yearHigh: 356.12,
            amount: 10
        },
        {
            id: 'asdfa12312',
            symbol: 'MSFT',
            companyName: 'Microsoft',
            purchaseDate: new Date(),
            price: 315.66,
            yearHigh: 356.12,
            amount: 30
        }
        ];
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
