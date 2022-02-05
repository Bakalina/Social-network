import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

const state = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Thanks'},
        {id: 4, message: 'Yo'},
    ]
};

it('newPost should be added ',() => {
    const action = addPostActionCreator('post');
    const newState = profileReducer(state,action);
    expect(newState.postData.length).toBe(5);
});

it('message of new post should be post ',() => {
    const action = addPostActionCreator('post');
    const newState = profileReducer(state,action);
    expect(newState.postData[4].message).toBe('post');
});

it('after deleting length of message should be decrement ',() => {
    const action = deletePost(1);
    const newState = profileReducer(state,action);
    expect(newState.postData.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect `,() => {
    const action = deletePost(100);
    const newState = profileReducer(state,action);
    expect(newState.postData.length).toBe(4);
});
