import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";


export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderTree(state);
});