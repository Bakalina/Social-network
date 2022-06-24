import {ResultCodeEnum} from "../Api/Api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {profileApi} from "../Api/ProfileApi";


const initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ],
    newPostText: 'React',
    profile: null as ProfileType | null,
    status: '',
    editModule: false
};

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
    setEditModule: (editModule: boolean) => ({type: 'SN/PROFILE/EDIT_MODULE', editModule} as const)
};

type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType | FormAction>

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case 'SN/PROFILE/ADD_POST':
        const newPost = {
            id: 5,
            message: action.newPostText
        };
        return {
            ...state,
            postData: [...state.postData, newPost]
        };
    case 'SN/PROFILE/SET_USER_PROFILE':
        return {
            ...state,
            profile: action.profile
        };
    case 'SN/PROFILE/SET_STATUS':
        return {
            ...state,
            status: action.status
        };
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
        return {
            ...state,
            profile: {...state.profile, photos: action.photos} as ProfileType
        };
    case 'SN/PROFILE/EDIT_MODULE':
        return {
            ...state,
            editModule: action.editModule
        };
    default: return state;
    }
};


export const getUserProfile = (userId: number | null): ThunkType => async dispatch => {
    const data = await profileApi.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getUserStatus = (userId: number): ThunkType => async dispatch => {
    const data = await profileApi.getStatus(userId);
    dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async dispatch => {
    const data = await profileApi.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setStatus(status));
    }
};

export const savePhoto = (file: any): ThunkType => async dispatch => {
    const data = await profileApi.savePhoto(file);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const changeEditModule = (editModule: boolean): ThunkType => async dispatch => {
    dispatch(actions.setEditModule(editModule));
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileApi.saveProfile(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
        await dispatch(getUserProfile(userId));
        dispatch(actions.setEditModule(false));
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}));
    }
};

export default profileReducer;