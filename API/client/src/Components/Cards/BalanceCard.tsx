import React from 'react';
import {Button} from "semantic-ui-react";

import style from './Cards.module.css';

const BalanceCard = () => {
    return(
        <div className={style.balanceCard}>
            <h2>Account Balance</h2>
            <h3>$3000</h3>
            <Button className={style.tempBtn}>Manage Balance</Button>
        </div>
    );
};

export default BalanceCard;