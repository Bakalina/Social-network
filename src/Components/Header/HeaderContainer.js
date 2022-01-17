import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logout} from "../../Redux/authReducer";


const HeaderContainer = (props) => {

    useEffect(()=>{
        props.getAuthUser()
    },[])

        return (
            <Header {...props}/>
        )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUser, logout})(HeaderContainer);