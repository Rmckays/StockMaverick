import React from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.";
import Login from "../../Components/Login/Login";
import Backdrop from '../../Components/Backdrop/Backdrop';

const Dashboard = () => {
    return(
        <>
            <Backdrop/>
            <Header />>
            <Navigation/>
            <Login />
            <Footer/>
        </>
    );
}