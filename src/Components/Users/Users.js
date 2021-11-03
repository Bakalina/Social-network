import React from "react";
import * as axios from "axios";


export default function Users(props) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        // eslint-disable-next-line react/prop-types
        .then((responce) => {props.setUsers(responce.data.items)})

    return <div>
        {/* eslint-disable-next-line react/prop-types */}
        {props.users.map(el =>
            <div key={el.id}>
                <span>
                    <div><img  alt='image' src={el.photos.small}/></div>
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
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </span>
                </span>
            </div>)}
    </div>
}


