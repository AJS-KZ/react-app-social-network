import React from "react";

import styles from './MyPosts.module.css';
import Post from "./Post/Post.jsx";


const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <div className={styles.postsBlock}>
                <h4>My Posts</h4>
                <div>
                    <div>
                        <textarea ref={newPostElement} placeholder="Enter New Post here ..."></textarea>
                    </div>

                    <div className={styles.addPostButton}>
                        <button onClick={addPost}>ADD POST</button>
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
