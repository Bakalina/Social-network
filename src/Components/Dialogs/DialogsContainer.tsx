import React from "react";
import {actions} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";
import {AppStateType} from "../../Redux/reduxStore";


const mapStateToProps = (state: AppStateType) => ({
    messagePage: state.messagePage
});


export default compose(
    connect(mapStateToProps, {onSendMessage: actions.addMessageActionCreator}),
    withAuthRedirectComponent
)(Dialogs);