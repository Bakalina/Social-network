import {PhotosType, ProfileType} from "../types/types";
import {instance, ResponseData} from "./Api";

type SavePhotoResponseType = {photos: PhotosType}

export const profileApi = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<ResponseData>(`profile/status`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData;
        formData.append('image', photoFile);

        return instance.put<ResponseData<SavePhotoResponseType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseData>(`profile`, profile)
            .then(response => response.data);
    }
};