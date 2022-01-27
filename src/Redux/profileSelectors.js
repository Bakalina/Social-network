

export const getProfile = state => {
    return state.mainPage.profile;
};

export const getStatus = state => {
    return state.mainPage.status;
};

export const getUserId = state => {
    return state.auth.userId;
};

export const getIsAuth = state => {
    return state.auth.isAuth;
};