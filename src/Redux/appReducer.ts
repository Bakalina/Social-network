import {getAuthUser} from "./authReducer";

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
};

type ActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case INITIALIZED_SUCCESS:
        return {
            ...state,
            initialized: true
        };
    default:
        return state;
    }
};

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});


export const initializedApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUser());
    promise.then(()=>{
        dispatch(initializedSuccess());
    });
};

export default appReducer;