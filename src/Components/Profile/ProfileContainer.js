import React, {useEffect, useRef} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    setEditModule,
    updateStatus
} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {getEditModule, getProfile, getStatus} from "../../Redux/profileSelectors";
import {getIsAuth, getUserId} from "../../Redux/authSelectors";


const ProfileContainer = (props) => {

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            let userId = props.match.params.userId;
            if (!userId) {
                userId = props.authorizedUserId;
            }
            props.getUserProfile(userId);
            props.getUserStatus(userId);
        }
    });


    return (
        <Profile {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            authorizedUserId={props.authorizedUserId}
            isOwner={!props.match.params.userId}
            savePhoto={props.savePhoto}
            editModule={props.editModule}
            setEditModule={props.setEditModule}
        />
    );

};

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state),
    editModule: getEditModule(state)
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile, setEditModule}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);

