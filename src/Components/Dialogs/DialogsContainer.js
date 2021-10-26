import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


export default function DialogsContainer() {

    return <StoreContext.Consumer>
            { (store) => {
            let state = store.getState();

            let onAddMessage = (body) => {
                store.dispatch(updateNewMessageActionCreator(body))
            }
            let onSendMessageClick = () => {
                store.dispatch(addMessageActionCreator())
            }
            return (
                <Dialogs updateNewMessage={onAddMessage}
                         addMessage={onSendMessageClick}
                         state={state} />
                )

        }}
        </StoreContext.Consumer>


}