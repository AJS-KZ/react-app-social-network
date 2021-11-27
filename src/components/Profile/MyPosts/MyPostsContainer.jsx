import React from "react";
import store from "../../../redux/redux-store.js";
import StoreContext from "../../../StoreContext.js";
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer.js';
import MyPosts from "./MyPosts.jsx";


const MyPostsContainer = () => {

    // let state = props.store.getState();

    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    //     // store.dispatch(addPostActionCreator());
    // }

    // const onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text));
    //     // store.dispatch(updateNewPostTextActionCreator());
    // }

    return <StoreContext.Consumer>
        {   (store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (<MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.postData}
                    newPostText={store.getState().profilePage.newPostText}
                />);
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;
