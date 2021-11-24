const ADD_POST = 'add_post';
const UPDATE_NEW_POST_TEXT = 'update_new_post_text';
const UPDATE_NEW_MESSAGE_BODY = 'update_new_message_body';
const SEND_MESSAGE = 'send_message';


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
    _updateNewMessageBody(newMessage){
        this._state.messagesPage.newMessageBody = newMessage;
        this._callSubscriber();
    },

    _sendMessage(){
        let body = this._state.messagesPage.newMessageBody;
        this._state.messagesPage.newMessageBody = "";
        let newMessage = {
            id: this._state.messagesPage.messages.length,
            message: body
        }
        this._state.messagesPage.messages.push(newMessage);
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost();
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._updateNewPostText(action.newText)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._updateNewMessageBody(action.newMessage)
        }else if (action.type === SEND_MESSAGE){
            this._sendMessage();
        }
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
}


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
}


export const updateNewMessageBodyActionCreator = (someMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: someMessage
    }
}


export default store;
window.store = store;
