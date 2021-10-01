import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";


export default function MyPost() {

    let postData = [
        {id:1, message:'Hi'},
        {id:1, message:'Hello'},
        {id:1, message:'Thanks'},
        {id:1, message:'Yo'}
    ]

    let postElement = postData
        .map((el)=>(<Post message={el.message}/>))

    return (
        <div className={style.myPost}>
            {postElement}
        </div>

    )
}