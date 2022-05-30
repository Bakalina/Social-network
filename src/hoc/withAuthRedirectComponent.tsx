import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";

const mapStateToPropsRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirectComponent = (Component: any) => {

    const RedirectComponent = (props: any) => {
        console.log(props);
        if (!props.isAuth) return <Redirect to={'/login'} />;
        return <Component {...props} />;
    };

    const ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;

};