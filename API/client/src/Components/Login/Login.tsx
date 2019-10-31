import React, {useContext} from 'react';
import {Form, Button, Modal, Header} from "semantic-ui-react";
import {Form as FinalForm, Field} from "react-final-form";

import style from '../Components.module.css';
import RootStoreContext from '../../Stores/rootStore';

interface IProps {

}

const Login: React.FC<IProps> = () => {
    const rootStore = useContext(RootStoreContext);
    const {login} = rootStore.userStore;

    const handleOnSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <Modal trigger={<Button className={style.btnRedModal}>Login</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='key' content='Login Please' />
                <Modal.Content className={style.form}>
                    <FinalForm
                        onSubmit={login}
                        render={({handleSubmit}) => (
                            <Form onSubmit={handleSubmit}  className={style.form}>
                                <Form.Field>
                                    <label className={style.textWhite}>Email</label>
                                    <Field name="email" placeholder='Email' type="email" component='input'/>
                                </Form.Field>
                                <Form.Field>
                                    <label className={style.textWhite}>Password</label>
                                    <Field name="password" placeholder='Password' type="password" component='input'/>
                                </Form.Field>
                                <Button className={style.btnRed} type='submit'>Login</Button>
                            </Form>
                        )}
                    />
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default Login;