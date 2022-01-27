import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {getIsAuth, getProfile, getStatus, getUserId} from "../../Redux/profileSelectors";


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
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state)
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);

