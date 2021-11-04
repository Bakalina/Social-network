import React from "react";
import * as axios from "axios";


export default function Users(props) {
    let getUsers = () => {
// eslint-disable-next-line react/prop-types
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                // eslint-disable-next-line react/prop-types
                .then(responce => {
                    // eslint-disable-next-line react/prop-types
                    props.setUsers(responce.data.items)
                })
        }
    }


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {/* eslint-disable-next-line react/prop-types */}
        {props.users.map(el =>
            <div key={el.id}>
                <span>
                    <div><img width='70px' alt='image' src={el.photos.small != null ? el.photos.small: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/></div>
                    <div>
                        { el.followed
                            // eslint-disable-next-line react/prop-types
                            ? <button onClick={()=>{props.unFollow(el.id)}}>Unfollow</button>
                            // eslint-disable-next-line react/prop-types
                            : <button onClick={()=>{props.follow(el.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'-'}</div>
                        <div>{'-'}</div>
                    </span>
                </span>
            </div>)}
    </div>
}


