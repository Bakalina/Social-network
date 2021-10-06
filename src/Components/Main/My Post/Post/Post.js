import React from "react";
import style from './Post.module.css';
import PropTypes from 'prop-types';

Post.propTypes = {
    message: PropTypes.string,
};



export default function Post( {message} ) {
    return (
        <div className={style.post}>
            <img alt={'avatar'} src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
            { message }
        </div>
    )
}