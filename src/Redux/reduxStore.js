import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import navReducers from "./navReducers";


 let reducers = combineReducers({
     messagePage: dialogsReducer,
     mainPage :profileReducer,
     sideBar: sideBarReducer,
     nav: navReducers
 })

let store = createStore(reducers)


export default store;