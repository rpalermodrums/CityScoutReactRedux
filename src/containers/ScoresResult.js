import React, {Component} from 'react';
import {connect} from 'react-redux'
import PreferencesSlidersContainer from '../containers/preferencesSlidersContainer'
import TotalScoreBox from '../components/totalScoreBox'
import SubmitAddressContainer from '../containers/submitAddressContainer'
import ScoreGraph from '../components/scoreGraph'
import BarGraph from '../components/barGraph'
import radarChart from '../components/radarChart'
import barChart from '../components/barChart'
import getPreferences from '../actions/getPreferences'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'

var text

const ScoresResult = class extends Component {
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
  }

  handleSearch(event){
    debugger
    console.log(this.props) // Just to check
    // event.preventDefault(); // Wouldn't work with preventDefault somehow - error: preventDefault is not a function
    text = event.label; // Object {label: "235 Flatbush Avenue, Brooklyn, NY, United States", placeId: "ChIJsUpk6K5bwokRrA98w3GiK4w", isFixture: false, gmaps: Object, location: Object}
    this.location = event.location; // Object {lat: 40.6811549, lng: -73.97486609999999}
    this.props.getAddress(text);
    sessionStorage.address = text
    this.props.getLocation(this.location);
    browserHistory.push('/preferences')
  }

  render() {
    const dictionary = {
      "accidents": "Safety",
      "crime": "Safety",
      "schools": "Education",
      "subways": "Transportation",
      "bikes": "Transportation",
      "parks": "Parks"
    }
    var scores = {}
    var averages = {}
    var preferences = {}
    Object.keys(dictionary).forEach((key) => {
      scores[key] = sessionStorage["own_score " + key]
      averages[key] = sessionStorage["averages " + key]
      preferences[dictionary[key]] = sessionStorage["preferences " + dictionary[key]]
    })
    var labels = Object.keys(scores);
    var totalWeight = 0
    var totalScore =0
    var scoreData = labels.map((key) => {
      var score = parseFloat(scores[key])
      var weight = parseInt(preferences[dictionary[key]])
      if (weight === 0) {
        weight = 1
      }
      var value = score * weight
      totalWeight += weight
      totalScore += value
      return value
    });
    scoreData = scoreData.map((score) => {
      return Math.floor(score / totalWeight)
    })
    totalScore = Math.floor(totalScore / totalWeight)
    debugger
    return(
      <div className="container-fluid">
        <TotalScoreBox totalScore={totalScore}/>
        <SubmitAddressContainer handleSubmit={this.handleSearch.bind(this)} id="result-bar" route='/results'/>
        <div className="row" id="chartsBox">
          <div className='col-md-4'>
          <PreferencesSlidersContainer handleSubmit={this.handleSubmit.bind(this)} />
          </div>
          <div className="col-md-4" id="radarChartBox">
            <ScoreGraph scores={scores} keys={labels} radarChart={radarChart} scoreData={scoreData} />
          </div>

          <div className="col-md-4" id="barChartBox">
            <BarGraph keys={labels} scores={scores} averages={averages} barChart={barChart}/>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    preferences: state.preferences.preferences

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getPreferences}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
