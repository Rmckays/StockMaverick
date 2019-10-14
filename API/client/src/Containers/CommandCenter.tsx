import React from 'react';

import Login from "../Components/Login/Login";
import style from './Containers.module.css';
import {Card, Grid, Segment} from "semantic-ui-react";
import GraphCard from "../Components/Cards/GraphCard";

const CommandCenter = () => {
    return (
        <div className={style.commandCenter}>
            <Grid columns={2}  divided >
                <Grid.Row stretched>
                    <Grid.Column width={11}>
                        <GraphCard/>
                        <Login/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment>1</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default CommandCenter;