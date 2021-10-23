import React from "react";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import Friends from "./Friends/Friends";


Nav.propTypes = {
    state: PropTypes.object
};



export default function Nav(state) {
    return (
        <div className={style.page}>
            <ul className={style.ul}>
                <li><NavLink activeClassName={style.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/music'>Music</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/settings'>Settings</NavLink></li>
            </ul>
            <Friends state={state}/>
        </div>

    )
}