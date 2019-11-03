import React, {useContext, useEffect} from 'react';
import {Table} from "semantic-ui-react";
import {observer} from "mobx-react-lite";

import style from "./Cards.module.css";
import RootStoreContext from "../../Stores/rootStore";

const TransactionCard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadStockTransactions, stockTransactions} = rootStore.transactionStore;

    const mappedStockTransactions = stockTransactions.map(stockTransaction => {

        const date = new Date(stockTransaction.transactionDate);

        return (
            <Table.Row>
                <Table.Cell>{date.toDateString()}</Table.Cell>
                <Table.Cell>{stockTransaction.type}</Table.Cell>
                <Table.Cell>{stockTransaction.symbol}</Table.Cell>
                <Table.Cell>{stockTransaction.companyName}</Table.Cell>
                <Table.Cell>{stockTransaction.transactionPrice.toFixed(2)}</Table.Cell>
                <Table.Cell>{stockTransaction.purchasePrice}</Table.Cell>
                <Table.Cell>{stockTransaction.transactionAmount}</Table.Cell>
            </Table.Row>
        )
    });

    useEffect(() => {
            loadStockTransactions();
        },
        [rootStore.transactionStore]);

    return(
        <div className={style.transactionCard} >
            <Table singleLine sortable={true} textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Transaction Date</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Transaction Amount $USD</Table.HeaderCell>
                        <Table.HeaderCell>Stock Price $USD</Table.HeaderCell>
                        <Table.HeaderCell>Amount of Stock</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {mappedStockTransactions}
                </Table.Body>
            </Table>
        </div>
    )
};

export default observer(TransactionCard);
