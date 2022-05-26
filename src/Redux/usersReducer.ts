import {objectHelpers} from "../Components/utils/objectHelpers";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {usersApi} from "../Api/UsersApi";
import {followApi} from "../Api/FollowApi";


const initialState = {
    users: [] as ([] | UserType[]),
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
};

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unFollowSuccess: (userId: number) => ({type: 'SN/USERS/UN_FOLLOW', userId} as const),
    setUsers: (users: UserType[]) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleIsFollowingProgress: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching} as const)
};

type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

const usersReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case 'SN/USERS/FOLLOW':
        return { ...state,
            users: objectHelpers(state.users, action.userId, "id", {followed:true})};

    case 'SN/USERS/UN_FOLLOW':
        return { ...state,
            users: objectHelpers(state.users, action.userId, "id", {followed:false})};

    case 'SN/USERS/SET_USERS':
        return {...state, users: [...action.users]};

    case 'SN/USERS/SET_TOTAL_USERS_COUNT':
        return {...state, totalUsersCount: action.totalUsersCount};

    case 'SN/USERS/TOGGLE_IS_FETCHING':
        return {...state, isFetching: action.isFetching};

    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
        return {...state, followingInProgress: action.isFetching};

    default: return state;
    }
};


export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async dispatch => {
    dispatch(actions.toggleIsFetching(true));

    const data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
};

const _followUnFollowFlow = async (dispatch: Dispatch<ActionType>,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionType) => {
    dispatch(actions.toggleIsFollowingProgress(true));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false));
};

export const follow = (userId: number): ThunkType => dispatch => {
    _followUnFollowFlow(dispatch, userId, followApi.getFollow.bind(followApi), actions.followSuccess);
};

export const unFollow = (userId: number): ThunkType => dispatch => {
    _followUnFollowFlow(dispatch, userId, followApi.getUnFollow.bind(followApi), actions.unFollowSuccess);
};


export default usersReducer;