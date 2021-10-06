import React from "react";
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

Friends.propTypes = {
    friends: PropTypes.array,
};


export default function Friends({friends}) {

    let friend = friends
        .map((el)=><div key={el.id}><Friend avatar={el.avatar} name={el.name} /></div>)

    return (
        <div>{friend}</div>
    )
}