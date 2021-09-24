import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";

export default function Main() {

    return (
        <div className={style.main}>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <div>"Avatar"</div>
            <MyPost/>
        </div>
    )

}