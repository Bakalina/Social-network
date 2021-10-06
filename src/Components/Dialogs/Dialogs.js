import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItems from "./Message/Message";
import PropTypes from 'prop-types';

Dialogs.propTypes = {
    messagePage: PropTypes.object,
};


export default function Dialogs( {messagePage} ) {

    let dialogsElement = messagePage.dialogsData
        .map((el) => (<DialogItem key={el.id} name={el.name} id={el.id}/>))

    let messageElement = messagePage.messageData
        .map((el) => (<MessageItems key={el.id} message={el.message} id={el.id}/>))


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
        </div>
    )
}