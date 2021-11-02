import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialogsItemsActive}>
                    Capitan America
                </div>
                <div className={styles.dialog}>
                    Barton
                </div>
                <div className={styles.dialog}>
                    Thor
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hello!
                </div>
                <div className={styles.message}>
                    ABC
                </div>
                <div className={styles.message}>
                    XYZ
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
