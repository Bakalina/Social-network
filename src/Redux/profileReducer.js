const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ],
    newPostText: 'React',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {
                ...action,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = text => (
    {type: updateNewPostText, newText: text}
)

export default profileReducer;