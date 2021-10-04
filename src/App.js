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


export default function App({ postData, dialogsData, messageData }) {

    return (
        <BrowserRouter>
            <div className={style.body}>
                <Header/>
                <Nav/>
                <div className={style.appContent}>
                    <Route path='/profile' render={() => <Main postData={postData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

)

};
