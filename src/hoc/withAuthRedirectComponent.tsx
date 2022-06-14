import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";

const mapStateToPropsRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});


export function withAuthRedirectComponent(WrappedComponent: any) {

    const RedirectComponent = (props: any) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={'/login'} />;
        return <WrappedComponent {...restProps} />;
    };

    return connect(mapStateToPropsRedirect)(RedirectComponent);

}