import React from 'react';
import {Grid} from "semantic-ui-react";

import Backdrop from "../../Components/Backdrop/Backdrop";
import Header from "../../Components/Header/Header";
import style from "../Containers.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Showcase from "../Showcase";
import Footer from "../../Components/Footer/Footer.";
import TransactionCard from "../../Components/Cards/TransactionsCard";
import WalletCard from "../../Components/Cards/WalletCard";
import BalanceCard from "../../Components/Cards/BalanceCard";


const Wallet = () => {
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
                        <Showcase
                            GraphCard={null}
                            TransactionCard={TransactionCard}
                            StockCard={null}
                            WalletCard={WalletCard}
                            BalanceCard={BalanceCard}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Wallet;