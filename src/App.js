import React, { Component } from 'react';
import './App.css';
import SubmitAddressContainer from './containers/submitAddressContainer.js'
import SliderContainer from './containers/preferencesSlidersContainer'

class App extends Component {
  render() {
    return (
      <div>
        <SubmitAddressContainer />
        <SliderContainer />
      </div>
    );
  }
}

export default App;
