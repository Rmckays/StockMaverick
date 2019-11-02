import React, {useContext} from 'react';
import {Container} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import {Redirect} from 'react-router-dom';

import style from '../Containers.module.css';
import Login from "../../Components/Login/Login";
import Backdrop from "../../Components/Backdrop/Backdrop";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.";
import Register from "../../Components/Register/Register";
import RootStoreContext from "../../Stores/rootStore";


const Home = () => {
    const rootStore = useContext(RootStoreContext);
    const {user} = rootStore.userStore;
    const isLoggedIn = (user) ? <Redirect to="/dashboard" />: null;

    return(
        <>
            {isLoggedIn}
            <Backdrop/>
            <Header/>
            <Container className={style.homeShowcaseContainer}>
                <h1 className={style.greeting}> Welcome to StockMaverick.</h1>
                <h2 className={style.textCenter}> Your home for fantasy stock trading with real time stock prices. If you aren't
                    already a member sign up now and receive $100 Fantasy Dollars on us to start your fantasy trading.</h2>
                <div className={style.centerBtns}>
                    <Login />
                    <Register />
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default observer(Home);