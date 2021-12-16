import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";


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

let AuthRedirectComponent = withAuthRedirectComponent(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;