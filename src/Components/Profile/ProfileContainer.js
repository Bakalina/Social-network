import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const ProfileContainer = (props) => {

    useEffect(()=> {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 21127
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId)
    }, [])



        return (
            <Profile {...props} profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
            />
        )

}

let mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
    status: state.mainPage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)

