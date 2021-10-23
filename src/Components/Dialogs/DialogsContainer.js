import React from "react";
import PropTypes from 'prop-types';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

DialogsContainer.propTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
};


export default function DialogsContainer({state, dispatch}) {

    let onAddMessage = (body) => {
        dispatch(updateNewMessageActionCreator(body))
    }

    let onSendMessageClick = () => {
        dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs updateNewMessage={onAddMessage} addMessage={onSendMessageClick} state={state} />
    )
}