import axios from "axios";

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type ResponseData<D = {}> = {
    data: D,
    resultCode: ResultCodeEnum,
    messages: string[]
}

export const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '738a7b98-0701-4aab-b063-c2ec324fb243'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


