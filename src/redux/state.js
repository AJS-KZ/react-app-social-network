import dialogsReducer from "./dialogs-reducer.js";
import profileReducer from "./profile-reducer.js";


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
            newMessageBody: "" 
        },

    },
    _callSubscriber(){ 
        console.log('state changed')
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber();
        
    }
}


export default store;
window.store = store;
