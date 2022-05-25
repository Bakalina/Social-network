import {ResultCodeEnum} from "../Api/Api";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {authApi} from "../Api/AuthApi";
import {securityApi} from "../Api/SecurityApi";


const initialState = {
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false,
    captchaUrl: null as (string | null)
};


const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/AUTH/SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS' , payload: {captchaUrl}} as const)
};


type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType | FormAction>


const authReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case 'SN/AUTH/SET_USER_DATA':
    case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
        return {
            ...state,
            ...action.payload,
        };
    default: return state;
    }
};


export const getAuthUser = (): ThunkType => async dispatch => {
    const data = await authApi.getAuth();
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, login, email} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const getCaptchaUrl = (): ThunkType => async dispatch => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async dispatch => {
    const data = await authApi.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeEnum.Success) {
        await dispatch(getAuthUser());
    } else {
        if (data.resultCode === ResultCodeEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }
        const message = data.messages.length > 0
            ? data.messages[0]
            : 'Error!';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch: any) => {
    const data = await authApi.logout();
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
};

export default authReducer;