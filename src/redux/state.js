let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hello World!', likesCount: 21 },
                { id: 2, message: 'Second Message ... ', likesCount: 17 },
                { id: 3, message: 'First Message;', likesCount: 9 }
            ],
            newPostText: "write new post here"
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Capitan America' },
                { id: 2, name: 'Barton' },
                { id: 3, name: 'Thor' }
            ],

            messages: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'ABC' },
                { id: 3, message: 'bla bla bla!' }
            ],
        },

    },
    _callSubscriber(){ 
        console.log('state changed')
    },
    getState(){
        return this._state;
    },
    _addPost(){
        let newPost = {
            id: this._state.profilePage.postData.length,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postData.unshift(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === 'add_post'){
            this._addPost();
        }else if (action.type === 'update_new_post_text'){
            this._updateNewPostText(action.newText)
        }
    }
}


export default store;
window.store = store;
