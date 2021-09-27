import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import style from "./App.module.css"
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


export default function App() {

    return (
        <BrowserRouter>
            <div className={style.body}>
                <div className={style.header}>
                    <Header />
                </div>
                <div className={style.nav}>
                    <Nav />
                </div>
                <div className={style.main}>
                    <Route path='/profile' component={Main} />
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>

    )

};
