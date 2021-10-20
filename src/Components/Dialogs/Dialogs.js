import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import PropTypes from 'prop-types';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";

Dialogs.propTypes = {
    messagePage: PropTypes.object,
    dispatch: PropTypes.func

};


export default function Dialogs( { messagePage, dispatch } ) {
    let dialogsElement = messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>))

    let messageElement = messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>))


    let addTextMessage = React.createRef()

    const onAddMessage = () => {
        let body = addTextMessage.current.value;
        dispatch(updateNewMessageActionCreator(body))
    }

    const onSendMessageClick = () => {
        dispatch(addMessageActionCreator())
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
                <textarea onChange={onAddMessage} ref={addTextMessage} value={messagePage.newMessageText} />
                <div>
                    <button onClick={onSendMessageClick}>add message</button>
                </div>
            </div>
        </>

    )
}