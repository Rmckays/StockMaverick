import React from 'react';
import { Table } from 'semantic-ui-react'

import style from './Cards.module.css';

const WalletCard = () => {
    return(
        <div className={style.walletCard} >
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Transaction Date</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Stock Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Amount $USD</Table.HeaderCell>
                        <Table.HeaderCell>Amount of Stock</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
};

export default WalletCard;