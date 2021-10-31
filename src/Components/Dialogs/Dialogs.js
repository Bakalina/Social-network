import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import PropTypes from 'prop-types';

Dialogs.propTypes = {
    state: PropTypes.object,
    onSendMessageClick: PropTypes.func,
    onAddMessage: PropTypes.func

};


export default function Dialogs({state, onSendMessageClick, onAddMessage} ) {
    console.log(state)

    let dialogsElement = state.messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>))

    let messageElement = state.messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>))


    let newPostElement = React.createRef()

    let AddMessage = () => {
        onSendMessageClick();
    }

    let onUpdateNewMessage = () => {
        let text = newPostElement.current.value;
        onAddMessage(text)
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
            <div>
                <h4>Message</h4>
                <textarea onChange={onUpdateNewMessage} ref={newPostElement} value={state.messagePage.newMessageText} />
                <div>
                    <button onClick={AddMessage}>add message</button>
                </div>
            </div>
        </>

    )
}