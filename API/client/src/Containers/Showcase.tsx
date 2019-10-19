import React from 'react';

import CommandCenter from "./CommandCenter";
import style from './Containers.module.css';
import StockCard from "../Components/Cards/StockCard";

interface IProps {
    GraphCard: React.FC<any> | null,
    WalletCard: React.FC<any> | null,
    TransactionCard: React.FC<any> | null,
    StockCard: React.FC<any> | null
}

const Showcase: React.FC<IProps> = ({GraphCard, WalletCard, TransactionCard, StockCard}) => {
    return (
      <div className={style.showcase}>
        <CommandCenter
            GraphCard={GraphCard}
            WalletCard={WalletCard}
            TransactionCard={TransactionCard}
            StockCard={StockCard}/>
      </div>
    );
};

export default Showcase;