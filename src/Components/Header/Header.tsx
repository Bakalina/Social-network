import React, {FC} from "react";
import style from "./Header.module.css";
import logo from "../../image/logo22.png";
import {NavLink} from "react-router-dom";

type HeaderProps = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className={style.head}>
            <img alt={'logo'} src={logo}/>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button className={style.button} onClick={props.logout}>Log out</button></div>
                    : <NavLink className={style.login} to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;