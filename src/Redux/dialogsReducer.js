const sendMessage = 'SEND-MESSAGE';
const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Lili'},
        {id: 4, name: 'Smitty'},
        {id: 5, name: 'Nic'}
    ],
        messageData: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Thanks'},
    {id: 4, message: 'i am fine'},
    {id: 5, message: 'Yo'}
],
    newMessageText: 'Body'
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case sendMessage:
            let body = {
                id: 6,
                message: state.newMessageText
            };
            return  {
                ...state,
                newMessageText: '',
                messageData: [ ...state.messageData, body ]
            }
        case updateNewMessageBody:
            return  {
                ...state,
                newMessageText:  action.body
            }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: sendMessage})

export const updateNewMessageActionCreator = body => (
    {type: updateNewMessageBody, body: body}
)

export default dialogsReducer;






