import React, {FC, useEffect} from "react";
import Nav from "./Components/Nav/Nav";
import style from "./App.module.css";
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {AppStateType} from "./Redux/reduxStore";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializedApp: () => void
}

const App: FC<MapPropsType & DispatchPropsType> = (props) => {

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
                <Route exact path='/' render={()=> <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );

};

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);