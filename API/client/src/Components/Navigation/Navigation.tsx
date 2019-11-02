import React, {useContext, useState} from 'react'
import {Menu, Image, Button} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

import style from '../Components.module.css';
import RootStoreContext from "../../Stores/rootStore";

interface IProps {

}

const Navigation: React.FC<IProps> = () => {
        const rootStore = useContext(RootStoreContext);
        const {logout} = rootStore.userStore;

        return (
            <Menu vertical className={style.navigation}>
                <Image className={style.profileImage} src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
                <Menu.Item as={NavLink} exact to='/dashboard'> Dashboard </Menu.Item>
                <Menu.Item as={NavLink} exact to='/portfolio'> Portfolio </Menu.Item>
                <Menu.Item as={NavLink} exact to='/wallet'> Wallet </Menu.Item>
                <Menu.Item as={NavLink} exact to='/profile'> Profile </Menu.Item>
                <Menu.Item as={NavLink} exact to='/about'> About </Menu.Item>
                <Button className={style.btnRed} onClick={logout} >Logout</Button>
            </Menu>
        )
};

export default Navigation;