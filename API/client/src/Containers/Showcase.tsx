import React from 'react';

import CommandCenter from "./CommandCenter";
import style from './Containers.module.css';

interface IProps {
    GraphCard: React.FC<any> | null,
}

const Showcase: React.FC<IProps> = ({GraphCard}) => {
    return (
      <div className={style.showcase}>
        <CommandCenter GraphCard={GraphCard} />
      </div>
    );
};

export default Showcase;