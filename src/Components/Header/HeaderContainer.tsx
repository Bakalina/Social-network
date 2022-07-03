import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {getIsAuth, getLogin} from "../../Redux/authSelectors";
import {AppStateType} from "../../Redux/reduxStore";

type HeaderContainerProps = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}

const HeaderContainer: FC<HeaderContainerProps> = (props) => {

    return (
        <Header {...props}/>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default connect(mapStateToProps, {logout})(HeaderContainer);