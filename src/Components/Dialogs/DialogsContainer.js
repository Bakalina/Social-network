import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";


// export default function DialogsContainer() {
//
//     return <StoreContext.Consumer>
//             { (store) => {
//             let state = store.getState();
//
//             let onAddMessage = (body) => {
//                 store.dispatch(updateNewMessageActionCreator(body))
//             }
//             let onSendMessageClick = () => {
//                 store.dispatch(addMessageActionCreator())
//             }
//             return (
//                 <Dialogs updateNewMessage={onAddMessage}
//                          addMessage={onSendMessageClick}
//                          state={state} />
//                 )
//
//         }}
//         </StoreContext.Consumer>
// }
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;