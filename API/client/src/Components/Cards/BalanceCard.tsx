import React from 'react';
import {Button, Input, Label} from "semantic-ui-react";

import style from './Cards.module.css';

const BalanceCard = () => {
    return(
        <div className={style.balanceCard}>
            <h2>Account Balance</h2>
            <h3>$3000</h3>
            <div className={style.balanceActions}>
                <label>Enter the Amount to Deposit or Withdraw</label>
                <Input className={style.balanceInput} placeholder="Enter Amount"/>
                <Button className={style.tempBtnGreen}>Deposit</Button>
                <Button className={style.tempBtnRed}>Withdrawal</Button>
            </div>
        </div>
    );
};

export default BalanceCard;