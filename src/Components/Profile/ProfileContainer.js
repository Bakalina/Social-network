import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
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

