import React, {FC} from "react";
import style from './ProfileInfo.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

type AddPostFormsValueType = {
    newMessage: string
}

type ProfileInfoFormType = {

}

const ProfileInfoForm: FC<InjectedFormProps<AddPostFormsValueType, ProfileInfoFormType> & ProfileInfoFormType> = (props) => {
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
    );
};


const ProfileInfoReduxForm = reduxForm<AddPostFormsValueType, ProfileInfoFormType>({form: 'newMessage'})(ProfileInfoForm);

type ProfileInfoType = {
    onAddPost: (newMessage: string) => void
}

const ProfileInfo: FC<ProfileInfoType> = (props) => {

    const onSubmit = (formData: AddPostFormsValueType) => {
        props.onAddPost(formData.newMessage);
    };

    return (
        <div className={style.descriptionBlock}>
            <h3>My post</h3>
            <ProfileInfoReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default ProfileInfo;

