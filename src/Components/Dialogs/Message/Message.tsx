import React, {FC} from "react";
import style from './../Dialogs.module.css';

type MessageItemsTypes = {
    message: string
}

const MessageItems: FC<MessageItemsTypes> = ({message}) => {
    return (
        <div className={style.message}>{message}</div>
    );
};


export default MessageItems;