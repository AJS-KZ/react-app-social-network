import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.data.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.data.messages.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();
    let sentMessage = () => {
        let message = newMessage.current.value;
        alert(message)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}

                <div className={styles.newMessage}>
                    <textarea
                        className={styles.textArea}
                        ref={newMessage}
                        placeholder="New Message">
                    </textarea>
                </div>

                <div>
                    <button onClick={sentMessage}>SENT</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
