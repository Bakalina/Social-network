import React from "react";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

export default function Nav({nav}) {
    return (
        <div className={style.page}>
            <ul className={style.ul}>
                <li><NavLink activeClassName={style.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/music'>Music</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/settings'>Settings</NavLink></li>
            </ul>
            <Friends friends={nav.friends}/>
        </div>

    )
}