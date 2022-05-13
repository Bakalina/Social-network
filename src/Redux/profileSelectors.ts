import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";

const getProfileSelector = (state: AppStateType) => {
    return state.mainPage.profile;
};

export const getProfile = createSelector(getProfileSelector, (profile) => {
    return profile;
});

const getStatusSelector = (state: AppStateType) => {
    return state.mainPage.status;
};

export const getStatus = createSelector(getStatusSelector, (status) => {
    return status;
});

const getPostDataSelector = (state: AppStateType) => {
    return state.mainPage.postData;
};

export const getPostData = createSelector(getPostDataSelector, (postData) => {
    return postData;
});

const getNewPostTextSelector = (state: AppStateType) => {
    return state.mainPage.newPostText;
};

export const getNewPostText = createSelector(getNewPostTextSelector, (newPostText) => {
    return newPostText;
});

const getEditModuleSelector = (state: AppStateType) => {
    return state.mainPage.editModule;
};

export const getEditModule = createSelector(getEditModuleSelector, (editModule) => {
    return editModule;
});