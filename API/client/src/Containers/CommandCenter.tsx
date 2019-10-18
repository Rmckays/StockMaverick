import React from 'react';

import Login from "../Components/Login/Login";
import style from './Containers.module.css';
import {Card, Grid, Segment} from "semantic-ui-react";
import GraphCard from "../Components/Cards/GraphCard";
import WalletCard from "../Components/Cards/WalletCard";
import TransactionCard from "../Components/Cards/TransactionsCard";

const CommandCenter = () => {
    return (
        <div className={style.commandCenter}>
            <Grid columns={2} stretched divided >
                <Grid.Row >
                    <Grid.Column width={9}>
                        <GraphCard />
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