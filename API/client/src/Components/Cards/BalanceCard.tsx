import React, {useContext, useEffect} from 'react';
import {Button, Input} from "semantic-ui-react";

import style from './Cards.module.css';
import {observer} from "mobx-react-lite";
import RootStoreContext from "../../Stores/rootStore";
import userStore from "../../Stores/userStore";

const BalanceCard = () => {
    const rootStore = useContext(RootStoreContext);
    const {user, getCurrentUser, setCashAmount, deposit, withdraw} = rootStore.userStore;
    const cash = (user) ? user.cashAmount.toFixed(2) : '0';

    const handleCashChange = (event: any) => {
        const amount = event.target.value;
        setCashAmount(amount);
    };

    const handleFocus = (event: any) => {
        event.target.value = '';
    };

    useEffect(() => {
        getCurrentUser();
    }, [userStore]);

    return(
        <div className={style.balanceCard}>
            <h2>Account Balance</h2>
            <h3>${cash}</h3>
            <div className={style.balanceActions}>
                <label>Enter the Amount to Deposit or Withdraw</label>
                <Input onFocus={handleFocus} onChange={handleCashChange} className={style.balanceInput} name="cashAmount" placeholder="Enter Amount"/>
                <Button onClick={deposit} className={style.tempBtnGreen}>Deposit</Button>
                <Button onClick={withdraw} className={style.tempBtnRed}>Withdrawal</Button>
            </div>
        </div>
    );
};

export default observer(BalanceCard);