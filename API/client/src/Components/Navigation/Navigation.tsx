import React, {useState} from 'react'
import {Menu, Image, Button} from 'semantic-ui-react'
import style from '../Components.module.css';
import {NavLink} from "react-router-dom";

interface IProps {

}

const Navigation: React.FC<IProps> = () => {
    // state = { activeItem: 'account' }
    //
    // handleItemClick = (e:any, { name }) => this.setState({ activeItem: name })

        // const { activeItem } = this.state

        return (
            <Menu vertical className={style.navigation}>
                <Image className={style.profileImage} src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
                <NavLink className={style.navLinksTop} to='/dashboard'> Dashboard </NavLink>
                <NavLink className={style.navLinks} to='/portfolio'> Portfolio </NavLink>
                <NavLink className={style.navLinks} to='/wallet'> Wallet </NavLink>
                <NavLink className={style.navLinks} to='/profile'> Profile </NavLink>
                <NavLink className={style.navLinksBottom} to='/about'> About </NavLink>
                <Button className={style.btnRed} >Logout</Button>

            </Menu>
        )
};

export default Navigation;