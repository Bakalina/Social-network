import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

Main.propTypes = {
    mainPage: PropTypes.string,
};

export default function Main({mainPage}) {

    return (
        <div className={ style.main }>
            <ProfileInfo/>
            <MyPost postData={mainPage.postData}/>
        </div>
    )
}