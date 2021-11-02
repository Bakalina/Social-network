import React from "react";


export default function Users(props) {
    return <div>
        {/* eslint-disable-next-line react/prop-types */}
        {props.users.map(el =>
            <div key={el.id}>
                <span>
                    <div><img width='100px' alt='image' src={el.photoUrl}/></div>
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
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.city}</div>
                        <div>{el.location.country}</div>
                    </span>
                </span>
            </div>)}
    </div>
}


