import {createSelector} from "reselect";


const getIsAuthSelectors = state => {
    return state.auth.isAuth;
};

export const getIsAuth = createSelector(getIsAuthSelectors, (isAuth) => {
    return isAuth;
});

const getLoginSelector = state => {
    return state.auth.login;
};

export const getLogin = createSelector(getLoginSelector, (login) => {
    return login;
});

const getUserIdSelector = state => {
    return state.auth.userId;
};

export const getUserId = createSelector(getUserIdSelector, (userId) => {
    return userId;
});