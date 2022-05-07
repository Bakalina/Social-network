const SEND_MESSAGE = 'dialogsReducer/SEND_MESSAGE';

type DialogsStateType = {
    id: number,
    name: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Lili'},
        {id: 4, name: 'Smitty'},
        {id: 5, name: 'Nic'}
    ] as Array<DialogsStateType>,
    messageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'i am fine'},
        {id: 5, message: 'Yo'}
    ],
};

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type AddMessageActionCreatorType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;


