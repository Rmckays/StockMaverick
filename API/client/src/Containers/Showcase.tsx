import React from 'react';

import CommandCenter from "./CommandCenter";
import style from './Containers.module.css';

interface IProps {
    GraphCard: React.FC | null,
    WalletCard: React.FC | null,
    TransactionCard: React.FC | null,
    StockCard: React.FC | null,
    BalanceCard: React.FC | null
}

const Showcase: React.FC<IProps> = ({GraphCard, WalletCard, TransactionCard, StockCard, BalanceCard}) => {
    return (
      <div className={style.showcase}>
        <CommandCenter
            GraphCard={GraphCard}
            WalletCard={WalletCard}
            TransactionCard={TransactionCard}
            StockCard={StockCard}
            BalanceCard={BalanceCard}/>
      </div>
    );
};

export default Showcase;