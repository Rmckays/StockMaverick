import React, {useContext, useEffect} from 'react';
import { Table } from 'semantic-ui-react'
import {observer} from "mobx-react-lite";

import style from './Cards.module.css';
import RootStoreContext from "../../Stores/rootStore";

const WalletCard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadWalletTransactions, walletTransactions} = rootStore.transactionStore;

    const mappedWalletTransactions = walletTransactions.map(walletTransaction => {

        const date = new Date(walletTransaction.transactionDate);

        return (
            <Table.Row>
                <Table.Cell>{date.toDateString()}</Table.Cell>
                <Table.Cell>{walletTransaction.type}</Table.Cell>
                <Table.Cell>{walletTransaction.amount}</Table.Cell>
            </Table.Row>
        )
    });

    useEffect(() => {
            loadWalletTransactions();
        },
        [rootStore.transactionStore]);

    return(
        <div className={style.walletCard} >
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Transaction Date</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Amount $USD</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {mappedWalletTransactions}
                </Table.Body>
            </Table>
        </div>
    )
};

export default observer(WalletCard);