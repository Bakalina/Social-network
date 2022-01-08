import React from "react";
import style from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";


const ProfileInfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessage'} component={'textarea'} placeholder={props.newPostText} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ProfileInfoReduxForm = reduxForm({form: 'login'})(ProfileInfoForm)

export default function ProfileInfo(props) {

    const onSubmit = (formData) => {
        props.onPostChange(formData.newMessage)
        props.onAddPost()
    }

    return (
            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <ProfileInfoReduxForm onSubmit={onSubmit} newPostText={props.newPostText}/>
            </div>
    )
}