import React from "react";
import PropTypes from 'prop-types';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";

ProfileInfoContainer.propTypes = {
    dispatch: PropTypes.func,
    newPostText: PropTypes.string,
};

export default function ProfileInfoContainer({dispatch}) {

    let onAddPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <ProfileInfo updateNewPost={onPostChange} addPost={onAddPost} />
    )
}