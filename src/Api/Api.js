import * as axios from "axios";
import data from "bootstrap/js/src/dom/data";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '738a7b98-0701-4aab-b063-c2ec324fb243'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersApi = {
    getUsers(currentPage, pageSize){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}

export const authApi = {
    getAuth(){
        return instance.get('auth/me')
            .then(response =>  response.data)
    }
}

export const followApi = {
    getFollow(id){
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    getUnFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}