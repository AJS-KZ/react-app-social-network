import React from "react";

import styles from './Post.module.css';


const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTTvdIZChjQVBe9AGIlhM8_1TGUDJczmqQOvRCM=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;
