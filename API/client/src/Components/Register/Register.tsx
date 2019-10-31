import React, {useContext} from 'react';
import {Form, Button, Modal, Header} from "semantic-ui-react";
import {Form as FinalForm, Field} from 'react-final-form';


import style from '../Components.module.css';
import RootStoreContext from "../../Stores/rootStore";
import {IUserFormValues} from "../../Models/user";


const Register: React.FC = () => {

    const rootStore = useContext(RootStoreContext);
    const {register} = rootStore.userStore;

    return (
        <Modal trigger={<Button className={style.btnDarkModal}>Register</Button>} basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='user plus' content='Register New User' />
                <Modal.Content className={style.form}>
                    <FinalForm
                        onSubmit={(values: IUserFormValues) => register(values)}
                        render={({handleSubmit}) => (
                            <Form onSubmit={handleSubmit} className={style.form}>
                                <Form.Field>
                                    <label className={style.textWhite}>Username</label>
                                    <Field name='username' placeholder='Username' component='input' />
                                </Form.Field>
                                <Form.Field>
                                    <label className={style.textWhite}>Display Name</label>
                                    <Field name="displayName" placeholder='Display Name' component='input'/>
                                </Form.Field>
                                <Form.Field>
                                    <label className={style.textWhite}>Email</label>
                                    <Field placeholder='Email' type="email" component='input' name='email' />
                                </Form.Field>
                                <Form.Field>
                                    <label className={style.textWhite}>Password</label>
                                    <Field placeholder='Password' type="password" component='input' name='password'/>
                                </Form.Field>
                                <Button className={style.btnRed} type='submit'>Register</Button>
                            </Form>
                        )}/>
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default Register;