import React from 'react';

import style from './Containers.module.css';
import {Card, Grid, Segment} from "semantic-ui-react";
import WalletCard from "../Components/Cards/WalletCard";
import TransactionCard from "../Components/Cards/TransactionsCard";

interface IProps {
    GraphCard: React.FC<any> | null,
}

const CommandCenter: React.FC<IProps> = ({GraphCard}) => {
    const renderGraph = (GraphCard) ? <GraphCard /> : null;

    return (
        <div className={style.commandCenter}>
            <Grid columns={2} stretched divided >
                <Grid.Row >
                    <Grid.Column width={9}>
                        {renderGraph}
                        <WalletCard />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <TransactionCard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default CommandCenter;