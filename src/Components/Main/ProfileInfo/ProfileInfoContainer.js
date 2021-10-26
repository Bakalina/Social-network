import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import StoreContext from "../../../StoreContext";


export default function ProfileInfoContainer() {
    return <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return <ProfileInfo updateNewPost={onPostChange}
                                    addPost={onAddPost}
                                    newPostText={state.mainPage.newPostText}/>
            }}
        </StoreContext.Consumer>

}