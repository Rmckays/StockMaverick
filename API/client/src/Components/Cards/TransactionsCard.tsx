import React, {useContext} from 'react';
import {Table} from "semantic-ui-react";
import {observer} from "mobx-react-lite";

import style from "./Cards.module.css";
import RootStoreContext from "../../Stores/rootStore";

const TransactionCard: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {loadStockTransactions, stockTransactions} = rootStore.stockStore;

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
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 15, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 19, 2019</Table.Cell>
                        <Table.Cell>Buy</Table.Cell>
                        <Table.Cell>AAPL</Table.Cell>
                        <Table.Cell>Apple Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$312.67</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>October 11, 2019</Table.Cell>
                        <Table.Cell>Sell</Table.Cell>
                        <Table.Cell>GOOGL</Table.Cell>
                        <Table.Cell>Alphabet Inc.</Table.Cell>
                        <Table.Cell>$3126.70</Table.Cell>
                        <Table.Cell>$1053.29</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
};

export default observer(TransactionCard);
