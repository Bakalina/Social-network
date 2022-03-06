import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, initialValues, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <div><b>Name:</b>
                {createField('Full name', 'fullName', [], Input)}</div>
        </div>
        <div>
            <div><b>About Me:</b>
                {createField('About Me', 'aboutMe', [], Textarea)}</div>
        </div>
        <div>
            <div><b>Looking for a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})} </div>
        </div>
        <div>
            <div><b>My professional skills:</b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)} </div>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(initialValues.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>;
            })}
        </div>
        <div className={style.buttonEditMode}>
            <button>save</button>
        </div>
    </form>;
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;