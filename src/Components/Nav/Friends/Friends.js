import React from "react";
import Friend from "./Friend/Friend";



export default function Friends({friends}) {

    let friend = friends
        .map((el)=><div><Friend avatar={el.avatar} name={el.name} /></div>)

    return (
        <div>{friend}</div>
    )
}