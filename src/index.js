import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let postData = [
    {id:1, message:'Hi'},
    {id:1, message:'Hello'},
    {id:1, message:'Thanks'},
    {id:1, message:'Yo'}
]

let dialogsData = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Lili'},
    {id: 4, name: 'Smitty'},
    {id: 5, name: 'Nic'}
]

let messageData = [
    {id: 1, message: 'Hi1'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Thanks'},
    {id: 4, message: 'i am fine'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

