import React from "react";
import style from './ProfileInfo.module.css'
import PropTypes from 'prop-types';

ProfileInfo.propTypes = {
    dispatch: PropTypes.func,
    newPostText: PropTypes.string,
};


export default function ProfileInfo({newPostText, dispatch}) {

    let newPostElement = React.createRef()

    let onAddPost = () => {
        dispatch({ type: 'ADD-POST' })
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }

    return (
        <div>
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
            <div className={style.descriptionBlock}>
                <h3>My post</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}