import {authApi} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload,
                 };
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}});


export const getAuthUser = () => {
    return (dispatch) => {
        authApi.getAuth().then(response => {
            console.log(response)
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })    
    }
}

export const login = (email, password, rememberMe) => {


    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUser())
            } else {
               let message =  response.data.messages.length > 0
                   ? response.data.messages[0]
                   : 'Error!' ;
                dispatch(stopSubmit('login', {_error:message}));
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;