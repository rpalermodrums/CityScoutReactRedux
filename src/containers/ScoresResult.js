import React, {Component} from 'react';
import {connect} from 'react-redux'
import PreferencesSlidersContainer from '../containers/preferencesSlidersContainer'
import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import BarGraph from '../components/barGraph'
import radarChart from '../components/radarChart'
import barChart from '../components/barChart'
import getPreferences from '../actions/getPreferences'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'

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

    browserHistory.push('/results')
  }

  render() {
    var dictionary = {
      "accidents": "Safety",
      "crime": "Safety",
      "schools": "Education",
      "subways": "Transportation",
      "bikes": "Transportation",
      "parks": "Parks"
    }
    var scores = this.props.scores.own_score
    var preferences = this.props.preferences
    var labels = Object.keys(scores);
    var totalWeight = 0
    var totalScore =0
    var scoreData = labels.map((key) => {
      var score = scores[key]
      var weight = preferences[dictionary[key]]
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
    return(
      <div className="container-fluid">

        <div className="row" id="chartsBox">
          <TotalScoreBox className="col-md-12" totalScore={totalScore} />
          <div className='col-md-4'>
          <PreferencesSlidersContainer handleSubmit={this.handleSubmit.bind(this)} />
          </div>
          <div className="col-md-4" id="radarChartBox">
            <ScoreGraph scores={scores} keys={labels} radarChart={radarChart} scoreData={scoreData} />
          </div>

          <div className="col-md-4" id="barChartBox">
            <BarGraph keys={labels} scores={this.props.scores.attributes} averages={this.props.scores.averages} barChart={barChart}/>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    scores: state.scores.data,
    averages: state.scores.data,
    attributes: state.scores.data,
    preferences: state.preferences.preferences

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getPreferences}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
