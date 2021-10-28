import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        postData: state.mainPage.postData
    }
}

 function MyPost(postDate) {
    let postElement = postDate.postData
        .map((el) => (<Post key={el.id} message={el.message}/>))
    return <div className={style.myPost}>
        {postElement}
    </div>

}

const MyPostContainer = connect(mapStateToProps)(MyPost)

export default MyPostContainer;