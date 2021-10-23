import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import PropTypes from 'prop-types';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

Main.propTypes = {
    mainPage: PropTypes.object,
    dispatch: PropTypes.func
};

export default function Main({mainPage, dispatch}) {

    return (
        <div className={ style.main }>
            <ProfileInfoContainer dispatch={dispatch} newPostText={mainPage.newPostText} />
            <MyPost postData={mainPage.postData} />
        </div>
    )
}