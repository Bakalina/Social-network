import React from "react";
import style from './Friend.module.css'
import PropTypes from 'prop-types';

Friend.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string
};

export default function Friend({avatar, name}) {
    return (
        <div className={style.friend}>
            <img alt='avatar' width='30px' src={avatar}/>
            <p>{name}</p>
        </div>
    )
}

