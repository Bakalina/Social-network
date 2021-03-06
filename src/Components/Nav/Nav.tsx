import React from "react";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";


export default function Nav() {
    return (
        <div className={style.page}>
            <ul className={style.ul}>
                <li><NavLink activeClassName={style.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/users'>Users</NavLink></li>
            </ul>
        </div>

    );
}