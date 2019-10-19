import React from 'react';

import style from './Containers.module.css';
import { Grid } from "semantic-ui-react";

interface IProps {
    GraphCard: React.FC<any> | null,
    WalletCard: React.FC<any> | null,
    TransactionCard: React.FC<any> | null,
    StockCard: React.FC<any> | null
}

const CommandCenter: React.FC<IProps> = ({GraphCard, TransactionCard, WalletCard, StockCard}) => {
    const renderGraph = (GraphCard) ? <GraphCard /> : null;
    const renderWallet = (WalletCard) ? <WalletCard /> : null;
    const renderTransactions = (TransactionCard) ? <TransactionCard /> : null;
    const renderStocks = (StockCard) ? <StockCard /> : null;

    return (
        <div className={style.commandCenter}>
            <Grid columns={2} stretched divided >
                <Grid.Row >
                    <Grid.Column width={9}>
                        {renderGraph}
                        {renderWallet}
                        {renderStocks}
                    </Grid.Column>
                    <Grid.Column width={7}>
                        {renderTransactions}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default CommandCenter;