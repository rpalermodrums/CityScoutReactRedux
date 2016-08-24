import React, {Component} from 'react';
import PreferencesSliderContainer from '../containers/preferencesSlidersContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import fetchScores from '../actions/fetchScores'

class PreferencePage extends Component{
  handleSubmit(event){
    const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
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
  render(){
    return(
      <div className="container">
          <ReactCSSTransitionGroup
            className="preferences-box"
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}>
              <div className="slider-title col-md-12">
                <h3>Choose your neighborhood categories</h3>
              </div>
              <div className="preference-bar">
                <PreferencesSliderContainer handleSubmit={this.handleSubmit.bind(this)} />
                <div className="">
                </div>
                <div className="">
                </div>
              </div>
          </ReactCSSTransitionGroup>
      </div>
    )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, fetchScores}, dispatch)
}

function mapStateToProps(state) {

  return {address: state.address.address, preferences: state.preferences, scores: state.scores}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencePage)
