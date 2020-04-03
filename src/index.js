import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redux/state";

let rerender = (state) => {
    ReactDOM.render(
        <App state = {state} dispatch = {store.dispatch.bind(store)} />, document.getElementById('root')
    );
};
rerender(store.getState());
store.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
