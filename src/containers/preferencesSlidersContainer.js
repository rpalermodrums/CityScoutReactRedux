import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import Address from '../components/address'

import fetchScores from '../actions/fetchScores'

const categories = ['Safety', 'Education', 'Transportation', 'Parks'];
const PreferencesSlidersContainer = class extends Component {

  componentWillMount(){
    this.props.fetchScores(this.props.address)
  }

  componentWillReceiveProps(nextProps){

    if (Object.keys(nextProps.scores.data).length !== 0) {
      document.getElementById("submitForm").hidden = false
    }
  }
  render() {
    return(
      <div>
        <Address text={this.props.address}/>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          {categories.map((category, idx) => {
            return(
                <div id="slider">
                  <label>{category}</label>
                  <Slider key={idx} category={category} id={category}/>
                </div>
            )
          })}
          <input id="submitForm" type="submit" hidden="true"/>
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
