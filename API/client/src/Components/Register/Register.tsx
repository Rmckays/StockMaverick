import React from 'react';
import {Form, Button, Modal, Header} from "semantic-ui-react";
import style from '../Components.module.css';

interface IProps {

}

const Register: React.FC<IProps> = () => {

    return (
        <Modal trigger={<Button className={style.btnDarkModal}>Register</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='user plus' content='Register New User' />
                <Modal.Content className={style.form}>
                    <Form className={style.form}>
                        <Form.Field>
                            <label className={style.textWhite}>Name</label>
                            <input placeholder='Name' />
                        </Form.Field>
                        <Form.Field>
                            <label className={style.textWhite}>Username</label>
                            <input placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label className={style.textWhite}>Email</label>
                            <input placeholder='Email' type="email" />
                        </Form.Field>
                        <Form.Field>
                            <label className={style.textWhite}>Password</label>
                            <input placeholder='Password' type="password"/>
                        </Form.Field>
                        <Button className={style.btnRed} type='submit'>Register</Button>
                    </Form>
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default Register;