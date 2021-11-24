import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from './../../redux/state.js';


const Dialogs = (props) => {

    let dialogElements = props.data.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.data.messages.map(m => <Message message={m.message} />);
    let newMessageBody = props.data.newMessageBody;

    let newMessage = React.createRef();
    let sentMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (e) => {
        let newMessageText = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(newMessageText))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div className={styles.newMessage}>
                        <textarea
                            className={styles.textArea}
                            onChange={onNewMessageChange}
                            ref={newMessage}
                            value={newMessageBody}
                            placeholder="Enter Your Message Here ...">
                        </textarea>
                    </div>

                    <div>
                        <button onClick={sentMessage}>SENT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
