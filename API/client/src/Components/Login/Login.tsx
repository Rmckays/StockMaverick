import React from 'react';
import {Form, Button, Modal, Header} from "semantic-ui-react";
import style from '../Components.module.css';

interface IProps {

}

const Login: React.FC<IProps> = () => {

    return (
        <Modal trigger={<Button className={style.btnRedModal}>Login</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='key' content='Login Please' />
                <Modal.Content className={style.form}>
                    <Form className={style.form}>
                        <Form.Field>
                            <label className={style.textWhite}>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label className={style.textWhite}>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Button className={style.btnRed} type='submit'>Login</Button>
                    </Form>
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default Login;