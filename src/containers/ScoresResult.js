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
  }
  render() {
    var keys = Object.keys(scores);
    var scoreData = keys.map((key) => {
      return scores[key]
    });

    return(
      <div className="large-66">
        <TotalScoreBox totalScore={totalScore} />

        <ScoreGraph scores={scores} keys={keys} radarChart={radarChart} scoreData={scoreData}/>

        <BarGraph scores={scores} barChart={barChart}/>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    scores: state.scores.data.scores
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchScores}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
