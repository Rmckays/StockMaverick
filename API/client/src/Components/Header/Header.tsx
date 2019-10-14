import React from 'react';
import style from '../Components.module.css';

const Header= () => {
    return (
        <div
            id='header'
            className={style.header}>
            <h1 className={style.textWhite}>StockMaverick</h1>
        </div>
    );
};

export default Header;