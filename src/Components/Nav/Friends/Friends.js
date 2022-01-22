import React from "react";
import Friend from "./Friend/Friend";
import store from "../../../Redux/reduxStore";


export default function Friends() {

    const friend = store.getState().nav.friends
        .map((el) => <div key={el.id}><Friend avatar={el.avatar} name={el.name}/></div>);
    return <div>{friend}</div>;
}