// Index.js - responsible for rendering everything.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import manageRecipesReducer from './Store/reducers/manageRecipesReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(manageRecipesReducer, composeEnhancer(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();