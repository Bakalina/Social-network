import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.mainPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;