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


export default function App({state}) {

    return (
        <BrowserRouter>
            <div className={style.body}>
                <Header />
                <Nav nav={state.nav}/>
                <div className={style.appContent}>
                    <Route path='/profile' render={() => <Main mainPage={state.mainPage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagePage={state.messagePage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    )

};
