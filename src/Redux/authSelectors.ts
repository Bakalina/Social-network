import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";


const getIsAuthSelectors = (state: AppStateType) => {
    return state.auth.isAuth;
};

export const getIsAuth = createSelector(getIsAuthSelectors, (isAuth) => {
    return isAuth;
});

const getLoginSelector = (state: AppStateType) => {
    return state.auth.login;
};

export const getLogin = createSelector(getLoginSelector, (login) => {
    return login;
});

const getUserIdSelector = (state: AppStateType) => {
    return state.auth.userId;
};

export const getUserId = createSelector(getUserIdSelector, (userId) => {
    return userId;
});

const getCaptchaUrlSelector = (state: AppStateType) => {
    return state.auth.captchaUrl;
};

export const getCaptchaUrl = createSelector(getCaptchaUrlSelector, (captchaUra) => {
    return captchaUra;
});