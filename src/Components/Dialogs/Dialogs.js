import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


function DialogItem(props) {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function MessageItems(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Lili'},
        {id: 4, name: 'Smitty'},
        {id: 5, name: 'Nic'}
    ]

    let messageData = [
        {id: 1, message: 'Hi1'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'i am fine'},
        {id: 5, message: 'Yo'}
    ]


    let dialogsElement = dialogsData
        .map((el) => (<DialogItem name={el.name} id={el.id}/>))

    let messageElement = messageData
        .map((el) => (<MessageItems message={el.message} id={el.id}/>))


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