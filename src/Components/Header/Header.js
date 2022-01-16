import React from "react";
import style from "./Header.module.css";
import logo from "../../image/logo22.png";
import {NavLink} from "react-router-dom";

export default function Header(props){
    return (
        <div className={style.head}>
            <img alt={'logo'} src={logo}/>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}