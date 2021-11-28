import React from "react";
import Preloader from "../../Preloader/Preloader";
import style from "./ProfileUser.module.css";

const ProfileUser = ( props ) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.container}>
            <div>
                <img src={props.profile.photos.large}/>
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