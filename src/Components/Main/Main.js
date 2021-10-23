import React from "react";
import style from './Main.module.css'
import MyPost from "./My Post/MyPost";
import PropTypes from 'prop-types';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

Main.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func

};

export default function Main({state, dispatch}) {
    return (
        <div className={ style.main }>
            <ProfileInfoContainer state={state} dispatch={dispatch}/>
            <MyPost state={state} />
        </div>
    )
}