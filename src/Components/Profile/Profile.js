import React from "react";
import style from './Main.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./My Post/MyPost";


export default function Profile() {
    return (
        <div className={ style.main }>
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}