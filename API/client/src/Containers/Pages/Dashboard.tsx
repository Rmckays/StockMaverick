import React, {useContext} from 'react';
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
import {Redirect} from "react-router";
import RootStoreContext from "../../Stores/rootStore";

const Dashboard = () => {
    const rootStore = useContext(RootStoreContext);
    const {user} = rootStore.userStore;

    const isLoggedOut = (!user) ? <Redirect to="/" />: null;

    return(
        <>
            {isLoggedOut}
            <Backdrop/>
            <Header />
            <Grid className={style.showcaseContainer}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Navigation/>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Showcase
                            GraphCard={GraphCard}
                            TransactionCard={TransactionCard}
                            WalletCard={WalletCard}
                            StockCard={null}
                            BalanceCard={null}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Dashboard;