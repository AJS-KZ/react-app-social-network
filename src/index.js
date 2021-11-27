import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.js'
import { Provider } from 'react-redux'


let rerenderEntireTree = (state) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
