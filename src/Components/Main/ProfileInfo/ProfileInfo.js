import React from "react";
import style from './ProfileInfo.module.css'
import PropTypes from 'prop-types';

ProfileInfo.propTypes = {
    addPost: PropTypes.func
};


export default function ProfileInfo({addPost}) {

    let newPostElement = React.createRef()

    let onAddPost = () => {
        debugger
        let text = newPostElement.current.value;
        addPost(text)
        newPostElement.current.value = '';
    }


    return (
        <div>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}