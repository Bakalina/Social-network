import {instance} from "./Api";

type GetCaptchaUrlType = {url: string}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlType>('security/get-captcha-url')
            .then(response => response.data);
    }
};