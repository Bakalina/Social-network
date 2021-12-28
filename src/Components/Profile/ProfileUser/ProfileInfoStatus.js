import React, {useEffect, useState} from "react";


const ProfileInfoStatus = (props) => {
    const [editMode, useEditMode] = useState(true)
    const [status, useStatus] = useState('')

    useEffect(()=>{
        useStatus(props.status)
    },[])

    const activateEditMode = () => {
        useEditMode(false)
    }
    const deActivateEditMode = () => {
        useEditMode(true)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
      useStatus(e.currentTarget.value)
    }
    console.log(status)
    return (
        <div>
            {editMode ? <span onDoubleClick={activateEditMode}>{props.status}</span>
                : <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} />}
        </div>
    )
}

export default ProfileInfoStatus;