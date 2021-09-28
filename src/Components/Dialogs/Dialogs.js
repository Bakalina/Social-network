import React from "react";
import style from './Dialogs.module.css';

export default function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>Bob</div>
                <div className={style.dialog}>Alex</div>
                <div className={style.dialog}>Lili</div>
                <div className={style.dialog}>Smitty</div>
                <div className={style.dialog}>Nic</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi!</div>
                <div className={style.message}>How are you</div>
                <div className={style.message}>Do you speak English?</div>
            </div>
        </div>
    )
}