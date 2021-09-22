import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import style from "./App.module.css"

export default function App(){

    return (
        <div className={style.body}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.nav}>
                <Nav/>
            </div>
            <div className={style.main}>
                <Main/>
            </div>
        </div>
    )

};
