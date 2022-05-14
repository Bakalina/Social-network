import React, {ChangeEvent, FC, useEffect, useState} from "react";
import style from "./ProfileUser.module.css";

type ProfileInfoStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
    authorizedUserId: number,
    profileId: number
}


const ProfileInfoStatus: FC<ProfileInfoStatusPropsType> = ({status, updateStatus, authorizedUserId, profileId}) => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [statusState, setStatus] = useState<string>(status);

    useEffect(()=>{
        setStatus(status);
    },[status]);

    const activateEditMode = () => {
        setEditMode(false);
    };

    const deActivateEditMode = () => {
        setEditMode(true);
        updateStatus(statusState);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={style.status}>
            {authorizedUserId === profileId ?
                editMode ? <span onDoubleClick={activateEditMode}>{status}</span>
                    : <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={statusState}/>
                : status
            }
        </div>
    );
};

export default ProfileInfoStatus;