import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";


export default function MyPost() {
    return (
        <div className={style.myPost}>
            <Post message='Hi'/>
            <Post message='Hello'/>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    )
}