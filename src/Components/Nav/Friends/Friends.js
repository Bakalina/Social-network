import React from "react";
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";


export default function Friends() {


    return <StoreContext.Consumer>
        {store => {
            let friend = store.getState().nav.friends
                .map((el)=><div key={el.id}><Friend avatar={el.avatar} name={el.name} /></div>)
            return <div>{friend}</div>
        }}
        </StoreContext.Consumer>


}