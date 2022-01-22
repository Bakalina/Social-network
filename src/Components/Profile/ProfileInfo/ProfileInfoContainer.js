import React from "react";
import {addPostActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.mainPage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    };
};


const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;