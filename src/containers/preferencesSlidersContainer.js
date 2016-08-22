import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import Address from '../components/address'
import { browserHistory } from 'react-router'
import fetchScores from '../actions/fetchScores'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const PreferencesSlidersContainer = class extends Component {
  handleSubmit(event){

    event.preventDefault()
    var preferences = {}
    for (var i = 0; i < 4; i++) {

      let value = parseInt(event.target.children[i].children[1].children[0].value, 10)
      let category = document.getElementById(`${categories[i]}`).id
      preferences[category] = value
    }
    this.props.getPreferences(preferences)

    browserHistory.push('/results')
  }
  componentWillMount(){
    this.props.fetchScores(this.props.address)
  }

  componentWillReceiveProps(nextProps){

    if (Object.keys(nextProps.scores.data).length !== 0) {
      document.getElementById("submitForm").disabled = false
    }
  }
  render() {
    return(
      <div>
        <Address text={this.props.address.address}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {categories.map((category, idx) => {
            return(
                <div id="slider">
                  <label>{category}</label>
                  <Slider key={idx} category={category} id={category}/>
                </div>
            )
          })}
          <input id="submitForm" type="submit" disabled="true"/>
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
