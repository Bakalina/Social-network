import React from "react";
import style from './Profile.module.css';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./My Post/MyPost";
import ProfileUser from "./ProfileUser/ProfileUser";


export default function Profile(props) {
    return (
        <div className={style.main}>
            <ProfileUser
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                authorizedUserId={props.authorizedUserId}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <ProfileInfoContainer/>
            <MyPostContainer/>
        </div>
    );
}