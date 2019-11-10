import React, {useContext, useState, useEffect} from 'react';
import {Button, Input} from "semantic-ui-react";

import style from './Cards.module.css';
import {observer} from "mobx-react-lite";
import RootStoreContext from "../../Stores/rootStore";
import userStore from "../../Stores/userStore";

const BalanceCard = () => {
    const rootStore = useContext(RootStoreContext);
    const {user, getCurrentUser, setCashAmount, deposit, withdraw} = rootStore.userStore;
    const cash = (user) ? user.cashAmount.toFixed(2) : '0';
    const [invalid, setValid] = useState(true);

    const handleCashChange = (event: any) => {
        const amount = event.target.value;
        handleQuery(amount);
        setCashAmount(amount);
    };

    const handleFocus = (event: any) => {
        event.target.value = '';
    };

    const handleQuery = (value: string) => {
        if(parseInt(value) > 0){
            setValid(false);
        } else {
            setValid(true);
        }
    };

    const validInput = (!invalid) ? <Input onFocus={handleFocus} onChange={handleCashChange} className={style.balanceInput} name="cashAmount" placeholder="Enter Amount"/> :
        <Input onFocus={handleFocus} onChange={handleCashChange} className={style.invalidBalanceInput} name="cashAmount" placeholder="Enter Amount"/> ;

    useEffect(() => {
        getCurrentUser();
    }, [userStore]);

    return(
        <div className={style.balanceCard}>
            <h2>Account Balance</h2>
            <h3>${cash}</h3>
            <div className={style.balanceActions}>
                <label>Enter the Amount to Deposit or Withdraw</label>
                {validInput}
                <Button disabled={invalid} onClick={deposit} className={style.tempBtnGreen}>Deposit</Button>
                <Button disabled={invalid} onClick={withdraw} className={style.tempBtnRed}>Withdrawal</Button>
            </div>
        </div>
    );
};

export default observer(BalanceCard);