import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, Form, reduxForm} from "redux-form";


const AddMessageForm = (props) => {
    return (
        <div>
            <h4>Message</h4>
            <Form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'addMessage'} component={'textarea'} placeholder={'New Message'} />
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </Form>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default function Dialogs(props) {

    let dialogsElement = props.state.messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>))

    let messageElement = props.state.messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>))


    if (!props.isAuth) return <Redirect to={'/login'} />

    const onSubmit = (formData) => {
        props.onSendMessageClick(formData.addMessage);
    }

    return (
        <>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={style.messages}>
                    {messageElement}
                </div>
            </div>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </>

    )
}