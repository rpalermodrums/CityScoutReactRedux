import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchScores from '../actions/fetchScores'
import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import BarGraph from '../components/barGraph'
import radarChart from '../components/radarChart'
import barChart from '../components/barChart'

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
    var totalScore = 50, scores = 'b'
    return(
      <div className="large-66">
        <TotalScoreBox totalScore={totalScore} />

        <ScoreGraph scores={scores} radarChart={radarChart} />

        <BarGraph scores={scores} barChart={barChart}/>
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
