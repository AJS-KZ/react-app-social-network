const UPDATE_NEW_MESSAGE_BODY = 'update_new_message_body';
const SEND_MESSAGE = 'send_message';

const dialogsReducer = (state, action) => {

    switch(action.type) {
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
