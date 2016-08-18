import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchScores from '../actions/fetchScores'
import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import radarChart from '../components/radarChart'
import VictoryGraph from '../components/victoryBar'


const ScoresResult = class extends Component {
  totalScore(){
    var scores = this.props.scores || [];
    /* 1. Transportation, recreation, Education, Safety
        - values will be inverse
          - Transportation and recreation will be a value of differences in lat/long normalized to 1-100 scale
          - education will be given a specific score based on it's grade
          - Safety will be a number of instances
    */
  }
  render() {
    var totalScore = 'a', scores = 'b'
    return(
      <div>
        <TotalScoreBox totalScore={totalScore} />

        <ScoreGraph scores={scores} radarChart={radarChart} />

        <VictoryGraph scores={scores} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    scores: state.scores
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchScores}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
