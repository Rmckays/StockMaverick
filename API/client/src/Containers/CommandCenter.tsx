import React from 'react';

import Login from "../Components/Login/Login";
import style from './Containers.module.css';
import {Card} from "semantic-ui-react";
import GraphCard from "../Components/Cards/GraphCard";

const CommandCenter = () => {
    return (
        <div className={style.commandCenter}>
            <GraphCard/>
            <Login/>
        </div>
    );
};

export default CommandCenter;