import {followApi, usersApi} from "../Api/Api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    fake: 10
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
    case "FAKE": return {...state, fake: state.fake + 1 };
    case FOLLOW:
        return { ...state, users: state.users.map(el => {
            if (el.id === action.userId){
                return {...el, followed: true};
            }
            return el;
        }) };

    case UN_FOLLOW:
        return { ...state, users: state.users.map(el => {
            if (el.id === action.userId){
                return {...el, followed: false};
            }
            return el;
        }) };
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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersApi.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        followApi.getFollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        followApi.getUnFollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};


export default usersReducer;