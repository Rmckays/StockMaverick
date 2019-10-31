import React, {useContext} from 'react';
import { Table } from 'semantic-ui-react'
import {observer} from "mobx-react-lite";

import style from './Cards.module.css';
import RootStoreContext from "../../Stores/rootStore";

const WalletCard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadWalletTransactions, walletTransactions} = rootStore.stockStore;

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
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Deposit</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Withdrawal</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Withdrawal</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Withdrawal</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Stock Sale</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Stock Purchase</Table.Cell>
                        <Table.Cell>-$5250.00</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
};

export default observer(WalletCard);