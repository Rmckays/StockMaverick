import React, {useContext, useEffect, useState} from 'react';
import { Button, Modal, Header, Input} from "semantic-ui-react";
import {Chart} from "react-google-charts";
import {observer} from "mobx-react-lite";
import { Redirect } from 'react-router-dom';

import style from '../Components.module.css';
import RootStoreContext from "../../Stores/rootStore";

interface IProps {
    queryDisabled: boolean
}

const StockSearch: React.FC<IProps> = ({queryDisabled}) => {
    const rootStore = useContext(RootStoreContext);
    const {
        stockQueryHistory,
        stockQuery,
        loadingHistory,
        closeQuery,
        loadStockAmount,
        sellStocks,
        buyStocks,
        stockTransaction,
        transactionMade} = rootStore.stockStore;

    const [invalid, setValid] = useState(true);

    const handleQuery = (value: string) => {
        if(parseInt(value) > 0){
            setValid(false);
        } else {
            setValid(true);
        }
    };

    const graphDataHist = [[{type: 'date', label: 'Day'}, '$USD']];

    const displayGraph = (loadingHistory) ? null : (<Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={graphDataHist}
        options={{
            hAxis: {
                title: 'Time',
            },
            vAxis: {
                title: 'Price $USD',
            },
        }}
        rootProps={{ 'data-testid': '1' }}
    />);

    const handleChange = (event: any) => {
        console.log(event.target.value);
        const value = event.target.value;
        loadStockAmount(value);
        handleQuery(value);
    };

    const handleTransaction = (transactionMade)? <Redirect to='/dashboard' /> : null;

    const validInput = (!invalid) ? <Input onChange={handleChange} name="amount" className={style.stockModalInput} placeholder='Number of Stock' /> :
        <Input onChange={handleChange} name="amount" className={style.invalidStockModalInput} placeholder='Number of Stock' /> ;

    useEffect(() => {
        stockQueryHistory.forEach(stock => {
            const dateFormat = stock.date.split("-");
            const newStockHist: any = [new Date( parseInt(dateFormat[0]), parseInt(dateFormat[1]) - 1, parseInt(dateFormat[2])), stock.closePrice];
            graphDataHist.push(newStockHist);
        });
        console.log("stock search:", graphDataHist);
    }, [rootStore.stockStore.stockQueryHistory, graphDataHist]);

    return (
        <Modal onClose={closeQuery} className={style.containerStock} trigger={<Button disabled={queryDisabled} className={style.btnRedModalSearch} type="submit">Search Stocks</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='dollar sign' content={`Price of ${stockQuery} in last 30 days`} />
                <Modal.Content className={style.form}>
                    {handleTransaction}
                    <div className={style.form}>
                        {displayGraph}
                        <label className={style.stockLabel}>Number of Stock</label>
                        <div className={style.stockBtns}>
                            {validInput}
                            <Button disabled={invalid} onClick={() => buyStocks(stockTransaction)} className={style.btnGreenStockModal}>Buy</Button>
                            <Button disabled={invalid} onClick={() => sellStocks(stockTransaction)} className={style.btnRedStockModal}>Sell</Button>
                        </div>
                    </div>
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default observer(StockSearch);