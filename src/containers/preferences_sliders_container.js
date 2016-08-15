/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPreferences} from '../actions/getPreferences'
import Slider from '../components/preference_slider'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const SliderContainer = class extends Component {
  handleSubmit(event){
    var preferences = []
    for (var i = 0; i < 5; i++) {
      preferences.push(parseInt(event.target
                            .children[i]
                            .children[1]
                            .children[0]
                            .value, 10))
    }
    event.preventDefault();
    debugger
    getPreferences(preferences)
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
  return bindActionCreators({getPreferences}, dispatch)
}

export default connect(mapDispatchToProps)(SliderContainer)
