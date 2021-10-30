import React from "react";
import style from './ProfileInfo.module.css'
import PropTypes from 'prop-types';

ProfileInfo.propTypes = {
    onPostChange: PropTypes.func,
    onAddPost: PropTypes.func,
    newPostText: PropTypes.string,
};

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
            <img alt={'image'} width='400px' src='https://klike.net/uploads/posts/2019-06/1559370578_1.jpg'/>
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