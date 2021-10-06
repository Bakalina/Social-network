import React from "react";
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

DialogItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
};



export default function DialogItem({id, name}) {

    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}





