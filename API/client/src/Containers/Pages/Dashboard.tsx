import React from 'react';
import {Grid} from "semantic-ui-react";

import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.";
import Backdrop from '../../Components/Backdrop/Backdrop';
import style from '../Containers.module.css';
import Showcase from "../Showcase";
import GraphCard from "../../Components/Cards/GraphCard";
import TransactionCard from "../../Components/Cards/TransactionsCard";
import WalletCard from "../../Components/Cards/WalletCard";

const Dashboard = () => {
    return(
        <>
            <Backdrop/>
            <Header />
            <Grid className={style.showcaseContainer}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Navigation/>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Showcase GraphCard={GraphCard} TransactionCard={TransactionCard} WalletCard={WalletCard}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Dashboard;