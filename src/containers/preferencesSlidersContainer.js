import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import Address from '../components/address'
import fetchScores from '../actions/fetchScores'

const categories = ['Safety', 'Education', 'Transportation', 'Parks'];
const attributes = ["accidents", "crime", "schools", "subways", "bikes", "parks"]
const PreferencesSlidersContainer = class extends Component {
  componentWillMount(){
    this.props.fetchScores(sessionStorage.address)
  }
  componentWillReceiveProps(nextProps){
    var scores = nextProps.scores.data
    attributes.map((key) => {
      let keys = Object.keys(scores)
      return keys.filter((k) => {return k !== 'boro' && k !== 'neighborhood'}).forEach((k) => {
        sessionStorage[k + " " + key] = scores[k][key]
      })
    })
    debugger
  }
  render() {
    return(
      <div>
        <Address text={sessionStorage.address}/>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          {categories.map((category, idx) => {
            return(
                <div id="slider">
                  <label>{category}</label>
                  <Slider handleClick={this.props.handleClick} key={idx} category={category} id={category}/>
                </div>
            )
          })}
          <input id="submitForm" type="submit" />
        </form>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, fetchScores}, dispatch)
}

function mapStateToProps(state) {
  return {address: state.address.address, preferences: state.preferences, scores: state.scores}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesSlidersContainer)
