import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const ProfileContainer = (props) => {

    useEffect(()=> {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, []);


    return (
        <Profile {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    );

};

const mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
    status: state.mainPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);

