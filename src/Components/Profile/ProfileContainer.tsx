import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    changeEditModule,
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {getEditModule, getProfile, getStatus} from "../../Redux/profileSelectors";
import {getIsAuth, getUserId} from "../../Redux/authSelectors";
import {AppStateType} from "../../Redux/reduxStore";
import {ProfileType} from "../../types/types";

type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string,
    authorizedUserId: number,
    isAuth: boolean,
    editModule: boolean
}

type MapDispatchToPropsType = {
    getUserStatus: (userId: number | null) => void,
    getUserProfile: (userId: number | null) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => void,
    changeEditModule: () => void
}

type PathParams = {
    userId: string
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParams>

const ProfileContainer: FC<ProfileContainerType> = (props) => {


    useEffect(() => {
        let userId = +props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    },[props.match.params.userId]);


    return (
        <Profile
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            authorizedUserId={props.authorizedUserId}
            isOwner={!props.match.params.userId}
            savePhoto={props.savePhoto}
            editModule={props.editModule}
            setEditModule={props.changeEditModule}
            saveProfile={props.saveProfile}
        />
    );

};

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state),
    editModule: getEditModule(state)
});

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {getUserStatus ,getUserProfile, updateStatus, savePhoto, saveProfile, changeEditModule}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);

