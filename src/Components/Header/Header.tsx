import React from "react";
import style from "./Header.module.css";
import logo from "../../image/logo22.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../Redux/authSelectors";
import { logout } from "../../Redux/authReducer";


const Header = () => {

    const isAuth = useSelector(getIsAuth);
    const login = useSelector(getLogin);

    const dispatch = useDispatch();

    return (
        <div className={style.head}>
            <img alt={'logo'} src={logo}/>
            <div className={style.loginBlock}>
                {isAuth ?
                    <div>{login} - <button className={style.button} onClick={dispatch(logout)}>Log out</button></div>
                    : <NavLink className={style.login} to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;