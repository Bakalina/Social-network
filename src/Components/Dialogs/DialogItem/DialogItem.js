import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export default function DialogItem({id, name}) {

    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}





