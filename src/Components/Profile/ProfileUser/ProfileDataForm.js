import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit}) => {
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
            {/*<p>Contacts: {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>;*/}
            {/*})}</p>*/}
        </div>
    </form>;
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;