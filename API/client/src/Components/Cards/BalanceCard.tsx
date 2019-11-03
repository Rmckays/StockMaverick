import React, {useContext} from 'react';
import {Button, Input} from "semantic-ui-react";

import style from './Cards.module.css';
import {observer} from "mobx-react-lite";
import RootStoreContext from "../../Stores/rootStore";

const BalanceCard = () => {
    const rootStore = useContext(RootStoreContext);
    const {user} = rootStore.userStore;

    const cash = (user) ? user.cashAmount.toFixed(2) : '0';

    return(
        <div className={style.balanceCard}>
            <h2>Account Balance</h2>
            <h3>${cash}</h3>
            <div className={style.balanceActions}>
                <label>Enter the Amount to Deposit or Withdraw</label>
                <Input className={style.balanceInput} placeholder="Enter Amount"/>
                <Button className={style.tempBtnGreen}>Deposit</Button>
                <Button className={style.tempBtnRed}>Withdrawal</Button>
            </div>
        </div>
    );
};

export default observer(BalanceCard);