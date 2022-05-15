import {authApi, securityApi} from "../Api/Api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

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
    payload: { captchaUra: string }
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

export const getCaptchaUrlSuccess = (captchaUra: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS , payload: {captchaUra}
});

export const getAuthUser = (): ThunkType => async dispatch => {
    const response = await authApi.getAuth();
    if (response.resultCode === 0) {
        const {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const getCaptchaUrl = (): ThunkType => async dispatch => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async dispatch => {
    const response = await authApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        await dispatch(getAuthUser());
    } else {
        if (response.data.resultCode === 10) {
            await dispatch(getCaptchaUrl());
        }
        const message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Error!';

        // @ts-ignore
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch: any) => {
    const response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;