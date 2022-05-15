import {getAuthUser} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type ActionType = InitializedSuccessActionType
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

const initialState: InitialStateType = {
    initialized: false
};


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


export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});


export const initializedApp = (): ThunkType => dispatch => {
    const promise = dispatch(getAuthUser());
    promise.then(()=>{
        dispatch(initializedSuccess());
    });
};

export default appReducer;