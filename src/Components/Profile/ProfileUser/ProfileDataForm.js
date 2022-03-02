import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, initialValues}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <p>Name:
                {createField('Full name', 'fullName', [], Input)}</p>
        </div>
        <div>
            <p>About Me:
                {createField('About Me', 'aboutMe', [], Textarea)}</p>
        </div>
        <div>
            <p>Looking for a job:
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})} </p>
        </div>
        <div>
            <p>My professional skills:
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)} </p>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(initialValues.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>;
            })}
        </div>
    </form>;
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;