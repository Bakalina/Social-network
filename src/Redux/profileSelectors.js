import {createSelector} from "reselect";

const getProfileSelector = state => {
    return state.mainPage.profile;
};

export const getProfile = createSelector(getProfileSelector, (profile) => {
    return profile;
});

const getStatusSelector = state => {
    return state.mainPage.status;
};

export const getStatus = createSelector(getStatusSelector, (status) => {
    return status;
});

const getPostDataSelector = state => {
    return state.mainPage.postData;
};

export const getPostData = createSelector(getPostDataSelector, (postData) => {
    return postData;
});

const getNewPostTextSelector = state => {
    return state.mainPage.newPostText;
};

export const getNewPostText = createSelector(getNewPostTextSelector, (newPostText) => {
    return newPostText;
});