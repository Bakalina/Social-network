import React from "react";
import style from './Main.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./My Post/MyPost";
import ProfileUser from "./ProfileUser/ProfileUser";
import {Redirect} from "react-router-dom";


export default function Profile(props) {
    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={ style.main }>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <ProfileUser profile={props.profile} />
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}