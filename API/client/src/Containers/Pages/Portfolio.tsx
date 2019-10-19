import React from 'react';
import Backdrop from "../../Components/Backdrop/Backdrop";
import Header from "../../Components/Header/Header";
import {Grid} from "semantic-ui-react";
import style from "../Containers.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Showcase from "../Showcase";
import Footer from "../../Components/Footer/Footer.";


const Portfolio = () => {
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
                        <Showcase GraphCard={null}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer/>
        </>
    );
};

export default Portfolio;