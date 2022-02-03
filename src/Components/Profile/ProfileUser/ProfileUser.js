import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";
import noImage from "./../../../image/no_image_user.jpg";

const ProfileUser = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={style.container}>
            <div>
                <img alt='image' className={style.userImage} src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : noImage }/>
                <ProfileInfoStatus status={props.status} updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId} profileId={props.profile.userId}/>
            </div>
            <div>
                <h3>{`Name -- ${props.profile.fullName}`}</h3>
                <p>{`About Me -- ${props.profile.aboutMe}`}</p>
                <p>{`My Facebook -- ${props.profile.contacts.facebook}`}</p>
            </div>
        </div>

    );
};

export default ProfileUser;