import { connect } from "react-redux";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer.js';
import Dialogs from "./Dialogs.jsx";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }
    let updateNewMessageChange = (newText) => {
        dispatch(updateNewMessageBodyActionCreator(newText))
    }
    return {
        updateNewMessageBody: updateNewMessageChange,
        sendMessage: sendMessage
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
