import {getAuthUser} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";


const initialState = {
    initialized: false
};

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
};


type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

const appReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
        return {
            ...state,
            initialized: true
        };
    default:
        return state;
    }
};


export const initializedApp = (): ThunkType => dispatch => {
    const promise = dispatch(getAuthUser());
    promise.then(()=>{
        dispatch(actions.initializedSuccess());
    });
};

export default appReducer;