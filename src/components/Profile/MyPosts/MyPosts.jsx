import React from "react";

import styles from './MyPosts.module.css';
import Post from "./Post/Post.jsx";


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

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
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
