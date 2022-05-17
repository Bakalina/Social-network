import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import {getCaptchaUrl, getIsAuth} from "../../Redux/authSelectors";
import {AppStateType} from "../../Redux/reduxStore";

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit,
    error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
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
            { captchaUrl && <img alt={'captcha'} src={captchaUrl}/> }
            { captchaUrl &&
                <div>
                    <Field
                        name={'captcha'}
                        placeholder={'Symbol from image'}
                        component={Input}
                        validate={[required]}
                        type={[]}/>
                </div>
            }
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const Login: FC<MapStatePropsType & MapDispatchToProps> = ({captchaUrl, isAuth, login}) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (isAuth) {
        return <Redirect to={'/profile'} />;
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state)
});

export default connect<MapStatePropsType, MapDispatchToProps, any, AppStateType>(mapStateToProps, {login}) (Login);