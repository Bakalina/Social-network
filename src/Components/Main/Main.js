import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

Main.propTypes = {
    mainPage: PropTypes.object,
    dispatch: PropTypes.func
};

export default function Main({mainPage, dispatch}) {

    return (
        <div className={ style.main }>
            <ProfileInfo dispatch={dispatch} newPostText={mainPage.newPostText} />
            <MyPost postData={mainPage.postData} />
        </div>
    )
}