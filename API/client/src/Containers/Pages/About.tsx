import React, {useContext, useState} from 'react';
import {Button, Container} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import {NavLink, Redirect} from 'react-router-dom';

import style from '../Containers.module.css';
import Backdrop from "../../Components/Backdrop/Backdrop";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.";
import Register from "../../Components/Register/Register";
import {history} from "../../index";
import RootStoreContext from "../../Stores/rootStore";


const About = () => {
    const rootStore = useContext(RootStoreContext);
    const [userRedirect, setRedirect] = useState(false);

    const {user} = rootStore.userStore;
    const isLoggedOn = (user) ? "Dashboard" : "Homepage";
    const noRegister = (!user) ? <Register /> : null;
    const dashRedirect = (userRedirect) ? <Redirect to="/dashboard" /> : null;


    const handleClick = () => {
        if(user){
            setRedirect(true);
        } else {
            history.push('/');
            history.go(0);
        }
    };

    return(
        <>
            <Backdrop/>
            <Header/>
            <Container className={style.homeShowcaseContainer}>
                {dashRedirect}
                <h1 className={style.greeting}> About StockMaverick.</h1>
                <h2 className={style.textCenter}> StockMaverick is a web application built using ASP.NET Core 2.2, React, MobX, and the
                IEX web api.  The back-end was built using ASP.NET Core and utilizes the CQRS/Mediator pattern, ASP.NET Identity, Entity
                Framework, RestSharp, LINQ, Newtonsoft, and an SQL Server database.  The front-end was built utilizing React, React Hooks,
                and MobX for state management.  Additionally the UI elements were built using Semantic UI React, and Google Charts. Although
                no real money or stocks are traded, all the data is real and is provided through the IEX Web API.</h2>
                <div className={style.centerBtns}>
                    <Button onClick={handleClick} className={style.btnRed}><NavLink exact to="/"/>{isLoggedOn}</Button>
                    {noRegister}
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default observer(About);