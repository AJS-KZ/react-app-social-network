const ADD_POST = 'add_post';
const UPDATE_NEW_POST_TEXT = 'update_new_post_text';


let initialState = {
    postData: [
        { id: 1, message: 'Hello World!', likesCount: 21 },
        { id: 2, message: 'Second Message ... ', likesCount: 17 },
        { id: 3, message: 'First Message;', likesCount: 9 }
    ],
    newPostText: "write new post here"
};


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.unshift(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
}


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default profileReducer;
