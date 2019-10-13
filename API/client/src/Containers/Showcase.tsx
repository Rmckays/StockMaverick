import React from 'react';

import Login from "../Components/Login/Login";
import style from './Containers.module.css';

const Showcase = () => {
    return (
      <div className={style.showcase}>
        <Login/>
      </div>
    );
};

export default Showcase;