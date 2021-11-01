import React from "react";

import MyPosts from "./MyPosts/MyPosts.jsx";
import styles from './Profile.module.css';


const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content.img}>
                <img src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" alt="content_pic" />
            </div>
            <div>
                ava + descriptions
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
