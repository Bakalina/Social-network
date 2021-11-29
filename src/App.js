import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import style from "./App.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



export default function App() {
    return (
        <BrowserRouter>
            <div className={style.body}>
                <Header />
                <Nav />
                <div className={style.appContent}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer/> }/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    )

};
