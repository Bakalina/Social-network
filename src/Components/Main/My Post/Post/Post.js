import React from "react";
import s from './Post.module.css';


export default function Post( props ) {
    return (
        <div className={s.post}>
            <img alt={'avatar'} src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
            { props.message }
        </div>
    )
}