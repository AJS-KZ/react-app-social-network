import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.js'
import StoreContext from './StoreContext';


let rerenderEntireTree = (state) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <StoreContext.Provider value={store}>
                        <App
                            state={store.getState()}
                            dispatch={store.dispatch.bind(store)}
                            store={store}
                        />
                    </StoreContext.Provider>
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
