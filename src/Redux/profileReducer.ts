import {profileApi, ResultCodeEnum} from "../Api/Api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostData, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";


const ADD_POST = 'profileReducer/ADD_POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';
const EDIT_MODULE = 'profileReducer/EDIT_MODULE';


type InitialStateType = {
    postData: PostData[],
    newPostText: string,
    profile: ProfileType | null,
    status: string,
    editModule: boolean
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string,
    profile?: ProfileType,
    status?: string,
    editModule?: boolean
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
}
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
type SetEditModuleType = {
    type: typeof EDIT_MODULE,
    editModule: boolean
}
type ActionType = AddPostActionCreatorType | SetUserProfileType
    | SetStatusType | SavePhotoSuccessType | SetEditModuleType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>


const initialState: InitialStateType = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ],
    newPostText: 'React',
    profile: null,
    status: '',
    editModule: false
};


const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case ADD_POST:
        const newPost = {
            id: 5,
            message: action.newPostText
        };
        return {
            ...state,
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
    case SAVE_PHOTO_SUCCESS:
        return {
            ...state,
            profile: {...state.profile, photos: action.photos}
        };
    case EDIT_MODULE:
        return {
            ...state,
            editModule: action.editModule
        };
    default: return state;
    }
};


export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setEditModule = (editModule: boolean): SetEditModuleType => ({type: EDIT_MODULE, editModule});

export const getUserProfile = (userId: number | null): ThunkType => async dispatch => {
    const data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatus = (userId: number): ThunkType => async dispatch => {
    const data = await profileApi.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async dispatch => {
    const data = await profileApi.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file: any): ThunkType => async dispatch => {
    const data = await profileApi.savePhoto(file);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileApi.saveProfile(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
        await dispatch(getUserProfile(userId));
        dispatch(setEditModule(false));
    } else {
        // @ts-ignore
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
    }
};

export default profileReducer;