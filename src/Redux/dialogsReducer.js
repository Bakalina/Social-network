const SEND_MESSAGE = 'dialogsReducer/SEND_MESSAGE';

const initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
    case SEND_MESSAGE:
        const body = action.newMessageBody;
        return {
            ...state,
            messageData: [ ...state.messageData,{id: 6, message: body}]
        };
    default: return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;


