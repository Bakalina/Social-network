import React from "react";
import style from './ProfileInfo.module.css'

export default function ProfileInfo() {
    return (
        <div>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
    )
}