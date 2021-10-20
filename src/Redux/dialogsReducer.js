const sendMessage = 'SEND-MESSAGE';
const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case sendMessage:
            let body = {
                id: 6,
                message: state.newMessageText
            };
            state.messageData.push(body);
            state.newMessageText = '';
            return state;
        case updateNewMessageBody:
            state.newMessageText = action.body;
            return state;
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: sendMessage})

export const updateNewMessageActionCreator = body => (
    {type: updateNewMessageBody, body: body}
)

export default dialogsReducer;