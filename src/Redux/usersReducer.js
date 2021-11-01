const follow = 'FOLLOW';
const unFollow = 'UN-FOLLOW';
const setUsers = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Bob', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Nik', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 3, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Lili', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 4, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Lola', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 5, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Anna', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 6, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Ben', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 7, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Rob', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 8, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Corner', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 9, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Alisha', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 10, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Annabel', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 11, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Kris', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 12, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Jim', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 13, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Connor', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 14, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: true, fullName: 'Kseniya', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 15, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Anastasia', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
        {id: 16, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
            followed: false, fullName: 'Yaroslav', status: 'I am happy', location: { city: 'Boston', country: 'USA' } },
    ],
    newPostText: 'React'
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
            return {...state, users: [...state.users, ...action.users]}


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

export default usersReducer;