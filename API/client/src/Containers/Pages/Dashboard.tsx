import React from 'react';
import {Grid, Container} from "semantic-ui-react";
import Navigation from "../../Components/Navigation/Navigation";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.";
import Login from "../../Components/Login/Login";
import Backdrop from '../../Components/Backdrop/Backdrop';

import style from '../Containers.module.css';

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
                        <Container >
                            <Login />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Dashboard;