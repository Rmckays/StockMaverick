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
                const retrievedStockTransactions = transactions.map(transanction => {
                    const newStockTransaction: IStockTransaction = {
                        id: transanction.id,
                        symbol: transanction.symbol,
                        type: transanction.type,
                        companyName: transanction.companyName,
                        transactionDate: transanction.transactionDate,
                        purchasePrice: transanction.purchasePrice,
                        sellPrice: transanction.sellPrice,
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
        agent.Transactions.getWalletTransactions()
            .then(walletTransactions => {
                const retrievedWalletTransactions = walletTransactions.map(walletTransaction => {
                    const newWalletTransaction: IWalletTransaction = {
                        id: walletTransaction.id,
                        type: walletTransaction.type,
                        amount: walletTransaction.amount,
                        transactionDate: walletTransaction.transactionDate
                    };
                    return newWalletTransaction;
                });
                runInAction(() => {
                    this.walletTransactions = retrievedWalletTransactions;
                });
            })
    };
}