import {action, observable, runInAction} from "mobx";
import {IStockTransaction} from "../Models/stockTransactionModel";
import {RootStore} from "./rootStore";
import agent from "../API/agent";
import {IWalletTransaction} from "../Models/walletTransactionModel";

export default class TransactionStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable stockTransactions: IStockTransaction[] = [];
    @observable walletTransactions: IWalletTransaction[] = [];

    @action loadStockTransactions = () => {
        agent.Transactions.getStockTransactions()
            .then(transactions => {
                console.log(transactions);
                const retrievedStockTransactions = transactions.map(transanction => {
                    const newStockTransaction: IStockTransaction = {
                        id: transanction.id,
                        symbol: transanction.symbol,
                        companyName: transanction.companyName,
                        transactionDate: transanction.transactionDate,
                        purchasePrice: transanction.purchasePrice,
                        transactionPrice: transanction.transactionPrice,
                        yearHigh: transanction.yearHigh,
                        transactionAmount: transanction.transactionAmount
                    };
                    return newStockTransaction;
                });
                runInAction(() => {
                    this.stockTransactions = retrievedStockTransactions;
                });
            });
    };

    @action loadWalletTransactions = () => {

    };
}