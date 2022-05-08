import {profileApi} from "../Api/Api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';
const EDIT_MODULE = 'profileReducer/EDIT_MODULE';

type PostData = {
    id: number
    message: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ] as Array<PostData>,
    newPostText: 'React',
    profile: null as ProfileType | null,
    status: '',
    editModule: false
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
            postData: state.postData.filter(el => el.id !== action.postId)
        };
    case SAVE_PHOTO_SUCCESS:
        return {
            ...state,
            profile: {...state.profile, photos: action.photos} as ProfileType
        };
    case EDIT_MODULE:
        return {
            ...state,
            editModule: action.editModule
        };
    default: return state;
    }
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
type SetEditModuleType = {
    type: typeof EDIT_MODULE
    editModule: boolean
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
// export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setEditModule = (editModule: boolean): SetEditModuleType => ({type: EDIT_MODULE, editModule});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(setEditModule(false));
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
    }
};

export default profileReducer;