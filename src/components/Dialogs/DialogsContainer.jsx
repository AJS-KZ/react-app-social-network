import React from "react";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from './../../redux/dialogs-reducer.js';
import Dialogs from "./Dialogs.jsx";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let updateNewMessageChange = (newText) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(newText))
    }

    return  <Dialogs 
                updateNewMessageBody={updateNewMessageChange}
                sendMessage={sendMessage}
                dialogs={state.dialogs}
                messages={state.messages}
                newMessageBody={state.newMessageBody}
            />
}

export default DialogsContainer;
