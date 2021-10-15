let store = {
    _state: {
        mainPage: {
            postData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Thanks'},
                {id: 4, message: 'Yo'}
            ],
            newPostText: 'React'
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Lili'},
                {id: 4, name: 'Smitty'},
                {id: 5, name: 'Nic'}
            ],
            messageData: [
                {id: 1, message: 'Hi1'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Thanks'},
                {id: 4, message: 'i am fine'},
                {id: 5, message: 'Yo'}
            ]
        },
        nav: {
            friends: [
                {id:1, name:'Bob', avatar:'https://i.pinimg.com/736x/c2/74/aa/c274aa153d376a2365b66af27521d203.jpg'},
                {id:2, name:'Nick', avatar:'https://cspromogame.ru//storage/upload_images/avatars/3981.jpg'},
                {id:3, name:'Lili', avatar:'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg'},
            ]
        }
    },
    getState() {
        return this._state },
    rerenderTree()  {
        console.log('state')
    },
    addPost() {
        let newPost = {
            id: 5,
            message : this._state.mainPage.newPostText
        };
        this._state.mainPage.postData.push(newPost);
        this._state.mainPage.newPostText = ''
        this.rerenderTree(this._state)

    },
    updatePostText(newText) {
        this._state.mainPage.newPostText = newText
        this.rerenderTree(this._state)

    },
    subscribe(observer) {
        this.rerenderTree = observer;
    },
}










export default store;