import React, {FC} from "react";
import style from './Post.module.css';

type PostType = {
    message: string
}

const Post: FC<PostType> = (props) => {
    return (
        <div className={style.post}>
            <img alt={'avatar'} src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
            { props.message }
        </div>
    );
};

export default Post;