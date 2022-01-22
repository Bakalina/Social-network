import React, {useEffect} from "react";
import Nav from "./Components/Nav/Nav";
import style from "./App.module.css";
import {Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import MyFriends from "./Components/MyFriends/MyFriends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";


const App = (props) => {

    useEffect(() => {
        props.initializedApp();
    }, []);

    if (!props.initialized) {
        return <Preloader/>;
    }

    return (
        <div className={style.body}>
            <HeaderContainer/>
            <Nav/>
            <div className={style.appContent}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <MyFriends/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);