import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

Main.propTypes = {
    mainPage: PropTypes.object,
    addPost: PropTypes.func
};

export default function Main({mainPage, addPost}) {

    return (
        <div className={ style.main }>
            <ProfileInfo addPost={addPost} />
            <MyPost postData={mainPage.postData} />
        </div>
    )
}