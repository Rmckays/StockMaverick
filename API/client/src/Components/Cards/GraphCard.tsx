import React from 'react';
import {Chart} from "react-google-charts";

import style from './Cards.module.css';
import {Card} from "semantic-ui-react";

const GraphCard: React.FC = () => {
    return (
        <Card raised className={style.graphCard}>
            <Chart
                className={style.chart}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Stocks', 'Stock Per Symbol'],
                    ['AAPL', 50],
                    ['GOOGL', 10],
                    ['MSFT', 100],
                    ['IBM', 15],
                    ['TESL', 25],
                    ['UBER', 34]
                ]}
                options={{
                    title: 'Current Stock Porfolio',
                    colors: [ '#8A0F0F', '#D4D4D4', '#CA3939', '#333', '#B81414', '#545454', '#9f9f9f', '#B30024', '#B30024']
                    // Just add this option
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </Card>
    );
};

export default GraphCard;