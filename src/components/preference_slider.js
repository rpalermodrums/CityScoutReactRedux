/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';

const Slider = class extends Component {
  handleSubmit(event){
    event.preventDefault()
  }
  render() {
    return(
    <input type="range" default="5" min="0" max="10" step="1"/>
    )
  }
};

export default Slider