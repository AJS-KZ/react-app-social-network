import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer.js';
import MyPosts from "./MyPosts.jsx";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
