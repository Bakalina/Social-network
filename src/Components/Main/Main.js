import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


export default function Main() {
    return (
        <div className={ style.main }>
            <ProfileInfoContainer />
            <MyPost />
        </div>
    )
}