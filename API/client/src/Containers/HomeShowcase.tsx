import React from 'react';

import style from './Containers.module.css';
import {Container} from "semantic-ui-react";
import Login from "../Components/Login/Login";
import Backdrop from "../Components/Backdrop/Backdrop";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.";

const HomeShowcase = () => {
    return(
        <>
            <Backdrop/>
            <Header/>
            <Container className={style.homeShowcaseContainer}>
                <h1 className={style.greeting}> Welcome to StockMaverick.</h1>
                <h2 className={style.textCenter}> Your home for stocking trading and real time stock prices. If you aren't
                already a member sign up now and receive $100 on us to start your trading.</h2>
                <div className={style.centerBtns}>
                    <Login />
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default HomeShowcase;