/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import fetchScores from '../actions/fetchScores'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const SliderContainer = class extends Component {
  handleSubmit(event){
    var preferences = {}
    for (var i = 0; i < 5; i++) {
      let value = parseInt(event.target.children[i].children[1].children[0].value, 10)
      let category = document.getElementById(`${categories[i]}`).id
      preferences[category] = value
    }
    event.preventDefault();
    getPreferences(preferences)
    fetchScores()
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {categories.map((category, idx) => {
          return(
            <div>
              <label>{category}</label>
              <Slider key={idx} category={category} id={category}/>
            </div>
          )
        })}
        <input type="submit" />
      </form>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, fetchScores}, dispatch)
}

export default connect(null, mapDispatchToProps)(SliderContainer)
