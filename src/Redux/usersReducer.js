import {followApi, usersApi} from "../Api/Api";
import {objectHelpers} from "../Components/utils/objectHelpers";

const FOLLOW = 'usersReducer/FOLLOW';
const UN_FOLLOW = 'usersReducer/UN_FOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
};

const usersFollowed = (state, action, newObgProp) => {
    return state.map(el => {
        if (el.id === action) {
            return {...el, ...newObgProp};
        }
        return el;
    });
};


const usersReducer = (state = initialState, action) => {


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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const response = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId) => (dispatch) => {
    followUnFollowFlow(dispatch, userId, followApi.getFollow.bind(followApi), followSuccess);
};

export const unFollow = (userId) => (dispatch) => {
    followUnFollowFlow(dispatch, userId, followApi.getUnFollow.bind(followApi), unFollowSuccess);
};


export default usersReducer;