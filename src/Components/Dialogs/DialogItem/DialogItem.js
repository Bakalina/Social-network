import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export default function DialogItem(props) {

    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}





