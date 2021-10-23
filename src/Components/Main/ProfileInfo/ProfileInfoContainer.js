import React from "react";
import PropTypes from 'prop-types';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";

ProfileInfoContainer.propTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
};

export default function ProfileInfoContainer({state, dispatch}) {

    let onAddPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <ProfileInfo updateNewPost={onPostChange} addPost={onAddPost} newPostText={state.mainPage.newPostText}/>
    )
}