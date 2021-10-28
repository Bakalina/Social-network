import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        postData: state.mainPage.postData
    }
}

const MyPostConnect = connect(mapStateToProps)(MyPost)

export default function MyPost() {

    console.log(postDate)
    let postElement = postDate
        .map((el) => (<Post key={el.id} message={el.message}/>))
    return <div className={style.myPost}>
        {postElement}
    </div>


}