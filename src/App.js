import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import style from "./App.module.css"
import Dialogs from "./Components/Dialogs/Dialogs";


export default function App() {

    return (
        <div className={style.body}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.nav}>
                <Nav />
            </div>
            <div className={style.main}>
                <Dialogs />
                {/*<Main/>*/}
            </div>
        </div>
    )

};
