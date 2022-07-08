import React, {FC} from "react";
import style from './Profile.module.css';
import MyPost from "./My Post/MyPost";
import ProfileUser from "./ProfileUser/ProfileUser";
import {ProfileType} from "../../types/types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfileType | null,
    savePhoto: (file: File) => void,
    isOwner: boolean,
    saveProfile: (profile: ProfileType) => void,
    status: string,
    updateStatus: (status: string) => void,
    authorizedUserId: number,
    setEditModule: (arg: boolean) => void,
    editModule: boolean
}

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.main}>
            <ProfileUser
                setEditModule={props.setEditModule}
                editModule={props.editModule}
                status={props.status}
                profile={props.profile}
                updateStatus={props.updateStatus}
                authorizedUserId={props.authorizedUserId}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
};


export default Profile;