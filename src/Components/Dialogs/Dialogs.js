import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import {Redirect} from "react-router-dom";


export default function Dialogs(props) {

    let dialogsElement = props.state.messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>))

    let messageElement = props.state.messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>))


    let newPostElement = React.createRef()

    let AddMessage = () => {
        props.onSendMessageClick();
    }

    let onUpdateNewMessage = () => {
        let text = newPostElement.current.value;
        props.onAddMessage(text)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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
            <div>
                <h4>Message</h4>
                <textarea onChange={onUpdateNewMessage} ref={newPostElement} value={props.state.messagePage.newMessageText} />
                <div>
                    <button onClick={AddMessage}>add message</button>
                </div>
            </div>
        </>

    )
}