import React from "react";
import style from './Main.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./My Post/MyPost";


export default function Profile( props ) {
    return (
        <div className={ style.main }>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <img src={props.profile.photos.large}/>
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}