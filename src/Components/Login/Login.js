import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import {getIsAuth} from "../../Redux/authSelectors";

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
                    validate={[required]}
                    type={'password'}/>
            </div>
            <div className={style.checkbox}>
                <Field name={'rememberMe'}
                    component={Input}
                    type={'checkbox'}/>
                remember me
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
});

export default connect(mapStateToProps, {login}) (Login);