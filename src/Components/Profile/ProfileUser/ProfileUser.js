import React, {useRef} from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileUser.module.css";
import ProfileInfoStatus from "./ProfileInfoStatus";
import noImage from "./../../../image/no_image_user.jpg";
import ProfileDataForm from "./ProfileDataForm";

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

    const onSubmit = (formData) => {
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
                    onSubmit={onSubmit}/> :
                <ProfileData
                    profile={props.profile}
                    goToEditMode={()=>props.setEditModule(true)}
                    isOwner={props.isOwner}/> }
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <h3>Name: {profile.fullName}</h3>
        </div>
        <div>
            <p>About Me: {profile.aboutMe}</p>
        </div>
        <div>
            <p>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'} </p>
        </div>
        <div>
            <p>My professional skills: {profile.lookingForAJobDescription} </p>
        </div>
        <div>
            <p>Contacts: {Object.keys(profile.contacts).map(key => {
                if(profile.contacts[key] != null && profile.contacts[key] !== '') {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>;
                }
            })}</p>
        </div>
        <div className={style.buttonEditMode}>
            { isOwner && <button onClick={goToEditMode}>Edit</button> }
        </div>
    </div>;
};


const Contact = ({contactTitle, contactValue}) => {
    return <p className={style.contacts}>{contactTitle}: {contactValue}</p>;
};

export default ProfileUser;