import React from "react";
import style from './ProfileInfo.module.css'


export default function ProfileInfo({newPostText, onPostChange, onAddPost}) {


    let newPostElement = React.createRef()

    let AddPost = () => {
        onAddPost();
    }

    let PostChange = () => {
        let text = newPostElement.current.value;
        onPostChange(text)
    }

    return (
        <div>

            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <div>
                    <textarea onChange={PostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}