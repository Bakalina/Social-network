import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

Main.propTypes = {
    mainPage: PropTypes.object,
    addPost: PropTypes.func,
    updatePostText: PropTypes.func
};

export default function Main({mainPage, addPost, updatePostText}) {

    return (
        <div className={ style.main }>
            <ProfileInfo addPost={addPost} newPostText={mainPage.newPostText} updatePostText={updatePostText} />
            <MyPost postData={mainPage.postData} />
        </div>
    )
}