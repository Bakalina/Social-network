import React from "react";
import style from './MyPost.module.css';
import Post from "./Post/Post";
import StoreContext from "../../../StoreContext";


export default function MyPost() {
    return <StoreContext.Consumer>
            {store => {
                let postElement = store.getState().mainPage.postData
                    .map((el) => (<Post key={el.id} message={el.message}/>))
                return <div className={style.myPost}>
                    {postElement}
                </div>
            }}
        </StoreContext.Consumer>

}