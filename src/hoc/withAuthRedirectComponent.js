import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirectComponent = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'} />;
        return <Component {...props} />;
    };

    const ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;

};