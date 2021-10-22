import React from 'react';
import store from "./Redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderTree(store.getState());

store.subscribe(()=>{
    let state= store.getState();
    rerenderTree(state);
});