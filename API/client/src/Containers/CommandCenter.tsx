import React from 'react';

import Login from "../Components/Login/Login";
import style from './Containers.module.css';

const CommandCenter = () => {
    return (
        <div className={style.commandCenter}>
            <Login/>
        </div>
    );
};

export default CommandCenter;