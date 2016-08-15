import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js'
import SliderContainer from './containers/preferences_sliders_container'

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <SliderContainer />
      </div>
    );
  }
}

export default App;
