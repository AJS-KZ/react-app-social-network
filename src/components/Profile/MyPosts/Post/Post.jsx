import React from "react";

import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.itemImage}
        src="https://yt3.ggpht.com/ytc/AKedOLTTvdIZChjQVBe9AGIlhM8_1TGUDJczmqQOvRCM=s900-c-k-c0x00ffffff-no-rj"
        alt="ava"
      />
      {/* <img className={styles.ava} src="https://www.ejin.ru/wp-content/uploads/2019/01/uq1bhlahbp0.jpg" /> */}
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
