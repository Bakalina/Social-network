import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Main() {

    return (
        <div className={style.main}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}