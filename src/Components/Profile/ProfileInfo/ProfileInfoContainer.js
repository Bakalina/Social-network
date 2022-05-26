import React from "react";
import {actions} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getNewPostText} from "../../../Redux/profileSelectors";


const mapStateToProps = (state) => {
    return {
        newPostText: getNewPostText(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => {
            dispatch(actions.addPostActionCreator(newPostText));
        }
    };
};


const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;