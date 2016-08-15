import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cityScoutApp from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(cityScoutApp)}>
    <App />
  <Provider />,
  document.getElementById('root')
);
