import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer.js";
import profileReducer from "./profile-reducer.js";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducers);


export default store;
