import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {getIsAuth, getLogin} from "../../Redux/authSelectors";

const HeaderContainer = (props) => {

    return (
        <Header {...props}/>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default connect(mapStateToProps, {logout})(HeaderContainer);