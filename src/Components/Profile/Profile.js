import React from "react";
import style from './Profile.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./My Post/MyPost";
import ProfileUser from "./ProfileUser/ProfileUser";


export default function Profile(props) {
    return (
        <div className={ style.main }>
            {/*<img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>*/}
            <ProfileUser profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <ProfileInfoContainer />
            <MyPostContainer />
        </div>
    )
}