import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";


export default function MyPost({postDate}) {

    let postElement = postDate
        .map((el)=>(<Post message={el.message}/>))

    return (
        <div className={style.myPost}>
            {postElement}
        </div>
    )
}