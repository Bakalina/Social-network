const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'}
    ],
    newPostText: 'React'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            let stateCopy = {...state};
            stateCopy.postData = {...state.postData};
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewPostText: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: addPost})

export const updateNewPostTextActionCreator = text => (
    {type: updateNewPostText, newText: text}
)

export default profileReducer;