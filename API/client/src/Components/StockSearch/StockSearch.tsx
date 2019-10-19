import React from 'react';
import { Button, Modal, Header, Input} from "semantic-ui-react";
import style from '../Components.module.css';
import {Chart} from "react-google-charts";

interface IProps {

}

const StockSearch: React.FC<IProps> = () => {

    return (
        <Modal className={style.containerStock} trigger={<Button className={style.btnRedModalSearch}>Search Stocks</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='dollar sign' content='Price of AAPL in last 30 days' />
                <Modal.Content className={style.form}>
                    <div className={style.form}>
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="400px"
                            data={[
                                ['Days', '$USD'],
                                [0, 0],
                                [1, 10],
                                [2, 23],
                                [3, 17],
                                [4, 18],
                                [5, 9],
                                [6, 11],
                                [7, 27],
                                [8, 33],
                                [9, 40],
                                [10, 32],
                                [11, 35],
                                ]}
                            options={{
                                hAxis: {
                                    title: 'Time',
                                },
                                vAxis: {
                                    title: 'Price $USD',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
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

export default StockSearch;