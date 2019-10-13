import React from 'react';
import style from '../Components.module.css';

const date = new Date().getFullYear();
const Footer = () => {
    return (
        <div
            id='footer'
            className={style.footer}>
            <p className={style.textWhite}>Comet Chat App &copy; {date}</p>
        </div>
    );
};

export default Footer;