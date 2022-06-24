import React, {ChangeEvent, FC, useRef} from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";
import noImage from "./../../../image/no_image_user.jpg";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";


type ContactType = {
    contactTitle: string,
    contactValue: string
}

const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={style.contacts}>{contactTitle}: {contactValue}</div>;
};

type ProfileDataType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <h3>Name: {profile.fullName}</h3>
        </div>
        <div>
            <p><b>About Me:</b> {profile.aboutMe}</p>
        </div>
        <div>
            <p><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'} </p>
        </div>
        <div>
            <p><b>My professional skills:</b> {profile.lookingForAJobDescription} </p>
        </div>
        <div>
            <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                if(profile.contacts[key as keyof ContactsType] != null && profile.contacts[key as keyof ContactsType] !== '') {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>;
                }
            })}</div>
        </div>
        <div className={style.buttonEditMode}>
            { isOwner && <button onClick={goToEditMode}>Edit</button> }
        </div>
    </div>;
};

type ProfileUserType = {
    profile: ProfileType,
    savePhoto: (file: File) => void,
    isOwner: boolean,
    saveProfile: (profile: ProfileType) => void,
    status: string,
    updateStatus: (status: string) => void,
    authorizedUserId: number,
    setEditModule: (arg: boolean) => void,
    editModule: boolean
}

const ProfileUser: FC<ProfileUserType> = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const fileInput = useRef<HTMLInputElement>(null);

    const addPhoto = () => {
        if (props.isOwner) {
            if (fileInput.current !== null) {
                fileInput.current.click();
            }
        }
    };

    const onSubmit = (formData: ProfileType) => {
        props.saveProfile(formData);
    };

    return (
        <div className={style.container}>
            <div>
                <div className={props.isOwner && style.addPhoto}>
                    <img
                        onClick={addPhoto}
                        alt='image'
                        className={style.userImage}
                        src={props.profile.photos.large != null ? props.profile.photos.large : noImage } />
                    {props.isOwner && <input
                        type="file"
                        onChange={onMainPhotoSelected}
                        ref={fileInput}
                        style={{display: 'none'}}/>}
                </div>
                <ProfileInfoStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                    authorizedUserId={props.authorizedUserId}
                    profileId={props.profile.userId}/>
            </div>
            { props.editModule ?
                <ProfileDataForm
                    initialValues={props.profile}
                    handleSubmit={onSubmit}/> :
                <ProfileData
                    profile={props.profile}
                    goToEditMode={()=>props.setEditModule(true)}
                    isOwner={props.isOwner}/> }
        </div>
    );
};


export default ProfileUser;