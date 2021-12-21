import React, {useState} from "react";


const ProfileInfoStatus = (props) => {
    const [editMode, useEditMode] = useState(true)

    const activateEditMode = () => {
        useEditMode(false)
    }
    const deActivateEditMode = () => {
        useEditMode(true)
    }

    return (
        <div>
            {editMode ? <span onDoubleClick={activateEditMode}>{props.status}</span>
                : <input autoFocus={true} onBlur={deActivateEditMode} value={props.status}/>}
        </div>
    )
}

export default ProfileInfoStatus;