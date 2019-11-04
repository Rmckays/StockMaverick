import React, {useContext} from 'react';
import {Form, Button, Modal, Header, Label} from "semantic-ui-react";
import {Form as FinalForm, Field} from "react-final-form";
import {FORM_ERROR} from 'final-form';

import style from '../Components.module.css';
import RootStoreContext from '../../Stores/rootStore';
import {IUserFormValues} from "../../Models/user";
import {combineValidators, isRequired} from 'revalidate';

const validate = combineValidators({
    email: isRequired('email'),
    password: isRequired('password')
})

const Login: React.FC = () => {
    const rootStore = useContext(RootStoreContext);
    const {login} = rootStore.userStore;

    return (
        <Modal trigger={<Button className={style.btnRedModal}>Login</Button>}  basic size='mini'>
            <div className={style.container}>
                <Header className={style.headerText} icon='key' content='Login Please' />
                <Modal.Content className={style.form}>
                    <FinalForm
                        onSubmit={(values: IUserFormValues) => login(values).catch(error => ({[FORM_ERROR]: error}))}
                        validate={validate}
                        render={({handleSubmit, submitError, invalid, pristine, dirtySinceLastSubmit}) => (
                            <Form onSubmit={handleSubmit}  className={style.form}>
                                <Form.Field>
                                    <label className={style.textWhite}>Email</label>
                                    <Field name="email" placeholder='Email' type="email" component='input'/>
                                </Form.Field>
                                <Form.Field>
                                    <label className={style.textWhite}>Password</label>
                                    <Field name="password" placeholder='Password' type="password" component='input'/>
                                </Form.Field>
                                {submitError && !dirtySinceLastSubmit && <Label color='red' basic content={submitError.statusText} />}
                                <Button disabled={invalid && !dirtySinceLastSubmit || pristine} className={style.btnRed} type='submit'>Login</Button>
                            </Form>
                        )}
                    />
                </Modal.Content>
            </div>
        </Modal>
    )
};

export default Login;