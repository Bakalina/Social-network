import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'}
                       placeholder={'Email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type={'checkbox'}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default connect(null, {login}) (Login);