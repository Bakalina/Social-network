import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import navReducers from "./navReducers";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


 let reducers = combineReducers({
     messagePage: dialogsReducer,
     mainPage :profileReducer,
     sideBar: sideBarReducer,
     nav: navReducers,
     usersPage: usersReducer,
     auth: authReducer
 })

let store = createStore(reducers)


export default store;