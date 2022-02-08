import {profileApi} from "../Api/Api";

const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST';

const initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ],
    newPostText: 'React',
    profile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
    case ADD_POST:
        const newPost = {
            id: 5,
            message: action.newPostText
        };
        return {
            ...action,
            postData: [...state.postData, newPost]
        };
    case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile
        };
    case SET_STATUS:
        return {
            ...state,
            status: action.status
        };
    case DELETE_POST:
        return {
            ...state,
            postData: state.postData.filter(el => el.id != action.postId)
        };
    default: return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;