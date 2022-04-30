import React from "react";
import style from './Dialogs.module.css';
import MessageItems from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, Form, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import DialogItem from "./DialogItem/DialogItem";


const maxLength10 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <div>
            <h4>Message</h4>
            <Form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'addMessage'}
                        component={Textarea}
                        placeholder={'New Message'}
                        validate={[required, maxLength10]} />
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </Form>
        </div>
    );
};

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm);

export default function Dialogs(props) {

    const dialogsElement = props.state.messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>));

    const messageElement = props.state.messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>));


    if (!props.isAuth) return <Redirect to={'/login'} />;

    const onSubmit = (formData) => {
        props.onSendMessageClick(formData.addMessage);
    };

    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={style.messages}>
                    {messageElement}
                </div>
            </div>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>

    );
}