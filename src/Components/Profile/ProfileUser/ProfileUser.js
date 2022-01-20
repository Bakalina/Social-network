import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";

const ProfileUser = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let noImage =  'https://prikolnye-kartinki.ru/img/picture/Sep/23/9d857169c84422fdaa28df62667a1467/3.jpg'
    return (
        <div className={style.container}>
            <div>
                <img className={style.userImage} src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : noImage }/>
                <ProfileInfoStatus status={props.status} updateStatus={props.updateStatus}/>
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