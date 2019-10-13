import React, {useState} from 'react'
import {Menu, Image, Button} from 'semantic-ui-react'
import style from '../Components.module.css';

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
                <Menu.Item
                    name='dashboard'
                    // active={activeItem === 'account'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='portfolio'
                    // active={activeItem === 'settings'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='wallet'
                    // active={activeItem === 'settings'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='profile'
                    // active={activeItem === 'settings'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='about'
                    // active={activeItem === 'settings'}
                    // onClick={this.handleItemClick}
                />
                <Button className={style.btnRed} >Logout</Button>

            </Menu>
        )
};

export default Navigation;