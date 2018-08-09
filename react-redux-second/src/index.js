import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import commentsReducer from './reducers/comments'
import './index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(commentsReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
