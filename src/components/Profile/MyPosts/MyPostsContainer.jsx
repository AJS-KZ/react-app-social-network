import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer.js';
import MyPosts from "./MyPosts.jsx";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPosts 
                updateNewPostText={onPostChange} 
                addPost={addPost} 
                posts={state.profilePage.postData} 
                newPostText={state.profilePage.newPostText}
            />);
}

export default MyPostsContainer;