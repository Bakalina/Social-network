import {instance, ResponseData} from "./Api";


type GetAuthResponseType = { id: number, email: string, login: string }
type LoginAndLogoutResponseType = { userId: number }


export const authApi = {
    getAuth() {
        return instance.get<ResponseData<GetAuthResponseType>>('auth/me')
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<ResponseData<LoginAndLogoutResponseType>>('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
};