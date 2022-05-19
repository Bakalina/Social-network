import {ResultCodeEnum} from "../Api/Api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {authApi} from "../Api/AuthApi";
import {securityApi} from "../Api/SecurityApi";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS';

type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
};
type SetAuthUserDataActionPayload = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayload
}
type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
type ActionType = SetAuthUserDataType | GetCaptchaUrlSuccessType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};


const authReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
        return {
            ...state,
            ...action.payload,
        };
    default: return state;
    }
};


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS , payload: {captchaUrl}
});

export const getAuthUser = (): ThunkType => async dispatch => {
    const data = await authApi.getAuth();
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const getCaptchaUrl = (): ThunkType => async dispatch => {
    const data = await securityApi.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
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

        // @ts-ignore
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch: any) => {
    const data = await authApi.logout();
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;