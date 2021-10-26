import React from 'react';
import store from "./Redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from "./StoreContext";


export let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderTree(state);
});