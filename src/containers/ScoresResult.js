import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import BarGraph from '../components/barGraph'
import radarChart from '../components/radarChart'
import barChart from '../components/barChart'

const ScoresResult = class extends Component {
  render() {
    var totalScore = 50
    var scores = this.props.scores
    var keys = Object.keys(scores);
    var scoreData = keys.map((key) => {
      return scores[key]
    });
    return(
      <div className="large-66">
        <TotalScoreBox totalScore={totalScore} />

        <ScoreGraph scores={scores} keys={keys} radarChart={radarChart} scoreData={scoreData}/>

        <BarGraph keys={keys} scores={this.props.attributes} averages={this.props.averages} barChart={barChart}/>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    scores: state.scores.data.scores,
    averages: state.scores.data.averages,
    attributes: state.scores.data.attributes

  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchScores}, dispatch)
// }

export default connect(mapStateToProps)(ScoresResult)
