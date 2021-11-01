import React from "react";

import styles from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>ADD POST</button>
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                    
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
