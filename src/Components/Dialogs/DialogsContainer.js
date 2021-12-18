import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (body) => {
            dispatch(updateNewMessageActionCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);