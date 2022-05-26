import React from "react";
import {actions} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(actions.addMessageActionCreator(newMessageBody));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);