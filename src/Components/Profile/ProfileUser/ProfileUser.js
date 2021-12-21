import React from "react";
import Preloader from "../../Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";

const ProfileUser = ( props ) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.container}>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileInfoStatus status={'Hello my friend!'}/>
            </div>
            <div>
                <h3>{`Name -- ${props.profile.fullName}`}</h3>
                <p>{`About Me -- ${props.profile.aboutMe}`}</p>
                <p>{`My Facebook -- ${props.profile.contacts.facebook}`}</p>
            </div>
        </div>

    )
}

export default ProfileUser;