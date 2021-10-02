import React from "react";
import style from './../Dialogs.module.css';




export default function MessageItems(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
