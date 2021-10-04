import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Main({mainPage}) {

    return (
        <div className={ style.main }>
            <ProfileInfo/>
            <MyPost postDate={mainPage.postData}/>
        </div>
    )
}