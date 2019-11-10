import React from 'react';
import style from '../Components.module.css';
import {NavLink} from "react-router-dom";

const date: number = new Date().getFullYear();
const Footer = () => {
    return (
        <div
            id='footer'
            className={style.footer}>
            <p style={{margin: 0}} className={style.textWhite}>StockMaverick &copy; {date}</p>
            <NavLink className={style.aboutLink} to="/about">About</NavLink>
        </div>
    );
};

export default Footer;