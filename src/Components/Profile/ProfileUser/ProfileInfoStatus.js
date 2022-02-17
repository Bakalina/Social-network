import React, {useEffect, useState} from "react";
import style from "./ProfileUser.module.css";

const ProfileInfoStatus = (props) => {
    const [editMode, setEditMode] = useState(true);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(false);
    };

    const deActivateEditMode = () => {
        setEditMode(true);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={style.status}>
            {props.authorizedUserId === props.profileId ?
                editMode ? <span onDoubleClick={activateEditMode}>{props.status}</span>
                    : <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
                : props.status
            }
        </div>
    );
};

export default ProfileInfoStatus;