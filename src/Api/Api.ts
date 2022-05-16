import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '738a7b98-0701-4aab-b063-c2ec324fb243'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});

type UpdateResponseType = {
    data: {},
    resultCode: ResultCodeEnum,
    messages: string[]
}
type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

type GetAuthResponseType = {
    data: {id: number, email: string, login: string},
    resultCode: ResultCodeEnum,
    messages: string[]
}
type LoginAndLogoutResponseType = {
    data: {userId: number},
    resultCode: ResultCodeEnum,
    messages: string[]
}


export const authApi = {
    getAuth(){
        return instance.get<GetAuthResponseType>('auth/me')
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null){
        return instance.post<LoginAndLogoutResponseType>('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout(){
        return instance.delete<LoginAndLogoutResponseType>('auth/login')
            .then(response => response.data);
    }
};


export const followApi = {
    getFollow(id: number){
        return instance.post<UpdateResponseType>(`follow/${id}`, {})
            .then(response => response.data);
    },
    getUnFollow(id: number){
        return instance.delete<UpdateResponseType>(`follow/${id}`)
            .then(response => response.data);
    }
};

type SavePhotoResponseType = {
    data: {photos: PhotosType},
    resultCode: ResultCodeEnum,
    messages: string[]
}

export const profileApi = {
    getProfile(userId: number | null){
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number){
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<UpdateResponseType>(`profile/status`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData;
        formData.append('image', photoFile);

        return instance.put<SavePhotoResponseType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<UpdateResponseType>(`profile`, profile)
            .then(response => response.data);
    }
};

type GetCaptchaUrlType = {
    url: string
}

export const securityApi = {
    getCaptchaUrl(){
        return instance.get<GetCaptchaUrlType>('security/get-captcha-url')
            .then(response => response.data);
    }
};