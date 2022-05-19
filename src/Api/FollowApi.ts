import {instance, ResponseData, ResultCodeEnum} from "./Api";


export const followApi = {
    getFollow(id: number) {
        return instance.post<ResponseData>(`follow/${id}`, {})
            .then(response => response.data);
    },
    getUnFollow(id: number) {
        return instance.delete<ResponseData>(`follow/${id}`)
            .then(response => response.data);
    }
};