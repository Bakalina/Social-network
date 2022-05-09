import {followApi, usersApi} from "../Api/Api";
import {objectHelpers} from "../Components/utils/objectHelpers";
import {UserType} from "../types/types";


const FOLLOW = 'usersReducer/FOLLOW';
const UN_FOLLOW = 'usersReducer/UN_FOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';


type InitialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean,
};

const initialState: InitialStateType = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
};

// const usersFollowed = (state, action, newObgProp) => {
//     return state.map(el => {
//         if (el.id === action) {
//             return {...el, ...newObgProp};
//         }
//         return el;
//     });
// };


const usersReducer = (state = initialState, action: any): InitialStateType => {


    switch (action.type) {
    case FOLLOW:
        return { ...state,
            users: objectHelpers(state.users, action.userId, "id", {followed:true})};

    case UN_FOLLOW:
        return { ...state,
            users: objectHelpers(state.users, action.userId, "id", {followed:false})};

    case SET_USERS:
        return {...state, users: [...action.users]};

    case SET_CURRENT_PAGE:
        return {...state, currentPage: action.currentPage};

    case SET_TOTAL_USERS_COUNT:
        return {...state, totalUsersCount: action.totalUsersCount};

    case TOGGLE_IS_FETCHING:
        return {...state, isFetching: action.isFetching};

    case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {...state, followingInProgress: action.isFetching};

    default: return state;
    }
};

type FollowSuccessType = {
    type: typeof FOLLOW,
    userId: number
};
type UnFollowSuccessType = {
    type: typeof UN_FOLLOW,
    userId: number
};
type SetUsersType = {
    type: typeof SET_USERS,
    users: UserType[]
};
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
};
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
};
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean,
};
type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
};


export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId: number): UnFollowSuccessType => ({type: UN_FOLLOW, userId});
export const setUsers = (users: UserType[]): SetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching: boolean): ToggleIsFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching});

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    const response = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

const followUnFollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true));
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false));
};

export const follow = (userId: number) => (dispatch: any) => {
    followUnFollowFlow(dispatch, userId, followApi.getFollow.bind(followApi), followSuccess);
};

export const unFollow = (userId: number) => (dispatch: any) => {
    followUnFollowFlow(dispatch, userId, followApi.getUnFollow.bind(followApi), unFollowSuccess);
};


export default usersReducer;