import React, {useContext} from 'react';

import style from './Containers.module.css';
import { Grid } from "semantic-ui-react";
import RootStoreContext from "../Stores/rootStore";

interface IProps {
    GraphCard: React.FC | null,
    WalletCard: React.FC | null,
    TransactionCard: React.FC | null,
    StockCard: React.FC | null,
    BalanceCard: React.FC | null
}

const CommandCenter: React.FC<IProps> = ({GraphCard, TransactionCard, WalletCard, StockCard, BalanceCard}) => {
    const renderGraph = (GraphCard) ? <GraphCard /> : null;
    const renderWallet = (WalletCard) ? <WalletCard /> : null;
    const renderTransactions = (TransactionCard) ? <TransactionCard /> : null;
    const renderStocks = (StockCard) ? <StockCard /> : null;
    const renderBalance = (BalanceCard) ? <BalanceCard /> : null;

    return (
        <div className={style.commandCenter}>
            <Grid columns={2} stretched divided >
                <Grid.Row >
                    <Grid.Column width={9}>
                        {renderBalance}
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