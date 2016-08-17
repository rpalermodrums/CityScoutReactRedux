import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchScores from '../actions/fetchScores'

const ScoresResult = class extends Component {
  render() {
    var scores = this.props.scores || []
    var scores_list = scores.map(score, idx)
    return(
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scores: state.scores
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchScores}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
