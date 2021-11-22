import React from "react";
import styles from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <img
                    className={styles.contentImg}
                    src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg"
                    alt="content_pic"
                />
            </div>

            <div className={styles.descriptionBlock}>
                <div>
                    <img
                        className={styles.userAvaItem}
                        src="https://avatanplus.com/files/resources/original/5d05ecbeba12d16b5f24c92a.png"
                        alt="user_ava"
                    />
                </div>
                <div className={styles.descriptionItem}>
                    Here some BIO DESCRIPTION
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
