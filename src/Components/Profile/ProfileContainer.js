import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
})

let WithUrlContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlContainerComponent);