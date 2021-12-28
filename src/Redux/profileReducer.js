import {profileApi} from "../Api/Api";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ],
    newPostText: 'React',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {
                ...action,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostTextActionCreator = text => (
    {type: updateNewPostText, newText: text}
)

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(responce => {
                dispatch(setUserProfile(responce.data));
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(responce => {
                dispatch(setStatus(responce.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0){
                dispatch(setStatus(status))}
            })
    }
}

export default profileReducer;