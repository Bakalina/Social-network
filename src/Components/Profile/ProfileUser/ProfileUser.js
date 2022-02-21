import React, {useRef, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";
import noImage from "./../../../image/no_image_user.jpg";

const ProfileUser = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const fileInput = useRef(null);

    const addPhoto = () => {
        if (props.isOwner) {
            fileInput.current.click();
        }
    };

    const [editMode, setEditMode] = useState(false);

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
            { editMode ?
                <ProfileDataForm profile={props.profile} /> :
                <ProfileData
                    profile={props.profile}
                    goToEditMode={()=>setEditMode(true)}
                    isOwner={props.isOwner}/> }
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner && <button onClick={goToEditMode}>Edit</button> }
        <h3>Name: {profile.fullName}</h3>
        <p>About Me: {profile.aboutMe}</p>
        <p>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'} </p>
        <p>My professional skills: {profile.lookingForAJobDescription} </p>
        <p>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>;
        })}</p>
    </div>;
};

const ProfileDataForm = ({profile}) => {
    return <div>Edit</div>;
};

const Contact = ({contactTitle, contactValue}) => {
    return <p>{contactTitle}: {contactValue}</p>;
};

export default ProfileUser;