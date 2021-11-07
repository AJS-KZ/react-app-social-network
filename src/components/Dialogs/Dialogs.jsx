import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Capitan America'},
        {id: 2, name: 'Barton'},
        {id: 3, name: 'Thor'}
    ]
    
    let messages = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'ABC'},
        {id: 3, message: 'bla bla bla!'}
    ]

    let dialogElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
