import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {getPostData} from "../../../Redux/profileSelectors";
import {AppStateType} from "../../../Redux/reduxStore";


type MyPostType = {
        id: number,
        message: string
}

const MyPost = () => {
    const postData = useSelector((state: AppStateType) => getPostData(state));

    const postElement = postData
        .map((el) => (<Post key={el.id} message={el.message}/>));
    return <div className={style.myPost}>
        {postElement}
    </div>;
};


export default MyPost;