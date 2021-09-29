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

function MessageItems(props){
    return (
        <div className={style.message}>{props.message}</div>
    )
}


export default function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Bob' id='1'/>
                <DialogItem name='Alex' id='2'/>
                <DialogItem name='Lili' id='3'/>
                <DialogItem name='Smitty' id='4'/>
                <DialogItem name='Nic' id='5'/>
            </div>
            <div className={style.messages}>
                <MessageItems message='Hi!'/>
                <MessageItems message='How are you'/>
                <MessageItems message='Do you speak English?'/>
            </div>
        </div>
    )
}