import React from 'react';
import style from '../Components.module.css';

const Header= () => {
    return (
        <div
            id='header'
            className={style.header}>
            <div id={style.logo} />
            <h1 className={style.logoText}><span className={style.redText}>Stock</span>Maverick</h1>
        </div>
    );
};

export default Header;