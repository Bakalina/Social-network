import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import connect from "react-redux/lib/connect/connect";


// export default function ProfileInfoContainer() {
//     return <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 let onAddPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//                 return <ProfileInfo updateNewPost={onPostChange}
//                                     addPost={onAddPost}
//                                     newPostText={state.mainPage.newPostText}/>
//             }}
//         </StoreContext.Consumer>
//
// }
const mapStateToProps = (state) => {
    return {
        newPostText: state.mainPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;