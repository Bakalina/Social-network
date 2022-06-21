import React from "react";
import {actions} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getNewPostText} from "../../../Redux/profileSelectors";
import {AppStateType} from "../../../Redux/reduxStore";


const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: getNewPostText(state)
    };
};


const ProfileInfoContainer = connect(mapStateToProps, {onAddPost: actions.addPostActionCreator})(ProfileInfo);

export default ProfileInfoContainer;