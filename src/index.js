// Index.js - responsible for rendering everything.
// Logger allows you to see the state changes happen in your console.
// The <Provider /> makes the Redux store available to any nested components 
  // that have been wrapped in the connect() function.
//Since any React component in a React Redux app can be connected, most applications will 
  //render a <Provider> at the top level, with the entire app’s component tree inside of it.
  //Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
//Browser Router- A <Router> that uses the HTML5 history API (pushState, replaceState, and 
  //the popstate event) to keep your UI in sync with the URL.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './Store/rootReducer'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)))

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