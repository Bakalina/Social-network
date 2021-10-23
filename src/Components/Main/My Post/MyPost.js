import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';

MyPost.propTypes = {
    state: PropTypes.object,
};


export default function MyPost({state}) {
    let postElement = state.mainPage.postData
        .map((el)=>(<Post key={el.id} message={el.message}/>))
    return (
        <div className={style.myPost}>
            {postElement}
        </div>
    )
}