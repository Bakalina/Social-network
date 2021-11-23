const follow = 'FOLLOW';
const unFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';
const setCurrentPage = 'SET-CURRENT-PAGE'
const setTotalUsersCount = 'SET-TOTAL-USERS-COUNT'
const toggleIsFetching = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case follow:
            return  { ...state, users: state.users.map(el => {
                if (el.id === action.userId){
                    return {...el, followed: true}
                }
                return el;
            }) };

        case unFollow:
            return  { ...state, users: state.users.map(el => {
                    if (el.id === action.userId){
                        return {...el, followed: false}
                    }
                    return el;
                }) };
        case setUsers:
            return {...state, users: [...action.users]}

        case setCurrentPage:
            return {...state, currentPage: action.currentPage}

        case setTotalUsersCount:
            return {...state, totalUsersCount: action.totalUsersCount}

        case toggleIsFetching:
            return {...state, isFetching: action.isFetching}

        default: return state;
    }
}

export const followActionCreator = (userId) => (
    {type: follow, userId}
)

export const unFollowActionCreator = (userId) => (
    {type: unFollow, userId}
)

export const setUsersActionCreator = (users) => (
    {type: setUsers, users}
)

export const setCurrentPageActionCreator = (currentPage) => (
    {type: setCurrentPage, currentPage }
)

export const setTotalUsersCountActionCreator = (totalUsersCount) => (
    {type: setTotalUsersCount, totalUsersCount }
)

export const setIsFetching = (isFetching) => (
    {type: toggleIsFetching, isFetching }
)

export default usersReducer;