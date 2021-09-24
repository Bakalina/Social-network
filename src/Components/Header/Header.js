import React from "react";
import style from "./Header.module.css";
import logo from "../../image/logo22.png";

export default function Header(){

    return (
        <div className={style.head}>
            <img alt={'logo'} src={logo}/>
        </div>
    )
}