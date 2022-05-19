import {instance} from "./Api";
import {UserType} from "../types/types";

type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};