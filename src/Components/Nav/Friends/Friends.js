import React from "react";
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

Friends.propTypes = {
    state: PropTypes.array,
};


export default function Friends({state}) {
    let friend = state.state.nav.friends
        .map((el)=><div key={el.id}><Friend avatar={el.avatar} name={el.name} /></div>)

    return (
        <div>{friend}</div>
    )
}