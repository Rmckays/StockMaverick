import React from 'react';
import {Chart} from "react-google-charts";

import style from './Cards.module.css';
import {Card} from "semantic-ui-react";




const GraphCard = () => {
    return (
        <Card raised className={style.graphCard}>
            {/*<Chart*/}

            {/*    chartType="LineChart"*/}
            {/*    loader={<div>Loading Chart</div>}*/}
            {/*    data={[*/}
            {/*        [*/}
            {/*            { type: 'date', label: 'Day' },*/}
            {/*            'Closing Price',*/}
            {/*        ],*/}
            {/*        [new Date(2019, 10, 1), 5.7],*/}
            {/*        [new Date(2019, 10, 2), 8.7],*/}
            {/*        [new Date(2019, 10, 3), 12],*/}
            {/*        [new Date(2019, 10, 4), 15.3],*/}
            {/*        [new Date(2019, 10, 5), 18.6],*/}
            {/*        [new Date(2019, 10, 6), 20.9],*/}
            {/*        [new Date(2019, 10, 7), 19.8],*/}
            {/*        [new Date(2019, 10, 8), 16.6],*/}
            {/*        [new Date(2019, 10, 9), 13.3],*/}
            {/*        [new Date(2019, 10, 10), 9.9],*/}
            {/*        [new Date(2019, 10, 11), 6.6],*/}
            {/*        [new Date(2019, 10, 12), 4.5],*/}
            {/*    ]}*/}
            {/*    options={{*/}
            {/*        chart: {*/}
            {/*            title:*/}
            {/*                'Market Price of AAPL',*/}
            {/*        },*/}
            {/*        series: {*/}
            {/*            // Gives each series an axis name that matches the Y-axis below.*/}
            {/*            0: { axis: 'Price' },*/}
            {/*        },*/}
            {/*        axes: {*/}
            {/*            // Adds labels to each axis; they don't have to match the axis names.*/}
            {/*            y: {*/}
            {/*                Price: { label: 'Price in USD$' },*/}

            {/*            },*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    rootProps={{ 'data-testid': '4' }}*/}
            {/*/>*/}
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
                    colors: [ '#792222', '#545454', '#9f9f9f', '#CA3939', '#333', '#D4D4D4']
                    // Just add this option
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </Card>
    );
};

export default GraphCard;