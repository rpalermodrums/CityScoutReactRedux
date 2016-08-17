import React, { Component } from 'react';
import './App.css';
import SubmitAddressContainer from './containers/submitAddressContainer.js'
import SliderContainer from './containers/preferencesSlidersContainer'
import {Router, Route, browserHistory} from 'react-router'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory} routes={Routes} />
      </div>
    );
  }
}

export default App;
