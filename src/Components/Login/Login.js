import React from 'react';
import a from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, maxLength15, minLength, minLength2, required} from "../../Utils/Validators/Validators";
import {Input} from "../FormsControl/FormsControl";

const LoginForm = (props) => {
    return (
        <div className={a.login}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[maxLength15, minLength2, required]} placeholder ={'Login'}  component = {Input} name = {'login'}/>
                </div>
                <div>
                    <Field validate={[maxLength15, minLength2, required]} placeholder ={'Password'}  component = {Input} name = {'password'}/>
                </div>
                <div>
                    <Field component = {'input'} type = {'checkbox'} name = {"rememberMe"}/> remember me
                </div>
                <div>
                    <button>Add</button>
                </div>

            </form>
        </div>);
};

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm);

const onSubmit = (values) => {
    console.log(values.login);
};




const Login = (props) => {
    return (
        <div className={a.login}>
            <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={onSubmit} />
        </div>);
};



export default Login;
