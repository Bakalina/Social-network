import React, {FC} from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number,
    name: string
}

const DialogItem: FC<DialogsItemType> = ({id, name}) => {

    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    );
};


export default DialogItem;