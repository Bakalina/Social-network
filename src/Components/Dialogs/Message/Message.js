import React from "react";
import style from './../Dialogs.module.css';
import PropTypes from 'prop-types';

MessageItems.propTypes = {
    message: PropTypes.string,
};



export default function MessageItems(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
