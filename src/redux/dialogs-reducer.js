const UPDATE_NEW_MESSAGE_BODY = 'update_new_message_body';
const SEND_MESSAGE = 'send_message';


let initialState = {
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
};


const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            let newMessage = {
                id: state.messages.length,
                message: body
            }
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageText;
            return state;
        default:
            return state;

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
        newMessageText: someMessage
    }
}


export default dialogsReducer;
