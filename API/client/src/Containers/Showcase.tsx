import React from 'react';

import CommandCenter from "./CommandCenter";
import style from './Containers.module.css';

const Showcase = () => {
    return (
      <div className={style.showcase}>
        <CommandCenter />
      </div>
    );
};

export default Showcase;