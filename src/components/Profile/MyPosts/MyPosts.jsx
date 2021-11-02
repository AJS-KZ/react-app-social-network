import React from "react";

// import styles from './MyPosts.module.css';
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
                    <Post message="Hello World!" likesCount="21"/>
                    <Post message="Second Message ... " likesCount="17"/>
                    <Post message="Third Message;" likesCount="9"/>
                    
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
