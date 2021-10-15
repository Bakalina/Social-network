import React from 'react';
import store from "./Redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updatePostText} from "./Redux/state";


export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}



rerenderTree(store.getState());

store.subscribe(rerenderTree);