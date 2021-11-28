import React from "react";

import styles from './MyPosts.module.css';
import Post from "./Post/Post.jsx";



const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={styles.postsBlock}>
                <h4>My Posts</h4>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            type="text"
                            value={props.newPostText}
                            ref={newPostElement}>
                             {/* placeholder={props.newPostText} */}
                            </textarea>
                    </div>

                    <div className={styles.addPostButton}>
                        <button onClick={onAddPost}>ADD POST</button>
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
