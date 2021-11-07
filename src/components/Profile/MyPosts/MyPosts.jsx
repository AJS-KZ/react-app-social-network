import React from "react";

import styles from './MyPosts.module.css';
import Post from "./Post/Post.jsx";


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello World!', likesCount: 21},
        {id: 2, message: 'Second Message ... ', likesCount: 17},
        {id: 3, message: 'First Message;', likesCount: 9}
    ]

    let postElements = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div>
            <div className={styles.postsBlock}>
                <h4>My Posts</h4>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>

                    <div className={styles.addPostButton}>
                        <button>ADD POST</button>
                    </div>
                </div>
                <div className={styles.postItem}>
                    { postElements }
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
