import React from "react";
import Friend from "./Friend/Friend";


export default function Friends() {

    let friend = store.getState().nav.friends
        .map((el) => <div key={el.id}><Friend avatar={el.avatar} name={el.name}/></div>)
    return <div>{friend}</div>
}