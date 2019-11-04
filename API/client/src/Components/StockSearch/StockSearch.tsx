import React, {useContext, useEffect} from 'react';
import { Button, Modal, Header, Input} from "semantic-ui-react";
import {Chart} from "react-google-charts";
import {observer} from "mobx-react-lite";

import style from '../Components.module.css';
import RootStoreContext from "../../Stores/rootStore";

const StockSearch: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {stockQueryHistory, stockQuery, loadingHistory, closeQuery} = rootStore.stockStore;

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

    useEffect(() => {
        stockQueryHistory.forEach(stock => {
            const dateFormat = stock.date.split("-");
            const newStockHist: any = [new Date( parseInt(dateFormat[0]), parseInt(dateFormat[1]) - 1, parseInt(dateFormat[2])), stock.closePrice];
            graphDataHist.push(newStockHist);
        });
        console.log("stock search:", graphDataHist);
    }, [rootStore.stockStore.stockQueryHistory, graphDataHist]);


    return (
        <Modal onClose={closeQuery} className={style.containerStock} trigger={<Button className={style.btnRedModalSearch} type="submit">Search Stocks</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='dollar sign' content={`Price of ${stockQuery} in last 30 days`} />
                <Modal.Content className={style.form}>
                    <div className={style.form}>
                        {displayGraph}
                        <label className={style.stockLabel}>Number of Stock</label>
                        <div className={style.stockBtns}>
                            <Input className={style.stockModalInput} placeholder='Number of Stock' />
                            <Button className={style.btnGreenStockModal}>Buy</Button>
                            <Button className={style.btnRedStockModal}>Sell</Button>
                        </div>
                    </div>
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default observer(StockSearch);