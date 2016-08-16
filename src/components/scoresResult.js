import React, {Component} from 'react';

const ScoresResult = class extends Component {
  render() {
    var scores = this.props.scores || []
    var scores_list = scores.map(score, idx)
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
