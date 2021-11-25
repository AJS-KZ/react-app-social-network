import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);
    let newMessageBody = props.newMessageBody;

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let newMessageText = e.target.value;
        props.updateNewMessageBody(newMessageText)
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
                            value={props.newMessageBody}
                            placeholder="Enter Your Message Here ...">
                        </textarea>
                    </div>

                    <div>
                        <button onClick={onSendMessage}>SENT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
