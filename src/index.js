import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/state.js'


let rerenderEntireTree = (state) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App
                        state={store.getState()}
                        dispatch={store.dispatch.bind(store)}
                    />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
