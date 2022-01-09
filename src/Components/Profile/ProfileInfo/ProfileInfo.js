import React from "react";
import style from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength10 =  maxLengthCreator(10)

const ProfileInfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessage'}
                       component={Textarea}
                       placeholder={'New Post'}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ProfileInfoReduxForm = reduxForm({form: 'newMessage'})(ProfileInfoForm)

export default function ProfileInfo(props) {

    const onSubmit = (formData) => {
        props.onAddPost(formData.newMessage)
    }

    return (
            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <ProfileInfoReduxForm onSubmit={onSubmit}/>
            </div>
    )
}