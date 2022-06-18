import {Redirect} from "react-router-dom";
import React, {FC} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/reduxStore";

const mapStateToPropsRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirectComponent <T>(WrappedComponent: React.ComponentType<T>) {

    const RedirectComponent: FC<MapPropsType> = (props) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={'/login'} />;
        return <WrappedComponent {...restProps as T} />;
    };

    return connect<MapPropsType, {}, T, AppStateType>(mapStateToPropsRedirect)(RedirectComponent);

}