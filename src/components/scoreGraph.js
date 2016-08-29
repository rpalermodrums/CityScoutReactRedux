import React, {Component} from 'react'
import getPreferences from '../actions/getPreferences'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class ScoreGraph extends Component {
  componentWillReceiveProps(nextProps){
    var loaded = false
    for (let i = 0; i < nextProps.scoreData.length; i++){
      loaded = this.props.scoreData[i] === nextProps.scoreData[i] ? true : false
      if (!loaded){break;}
    }
    if (!loaded){
      nextProps.radarChart(document.getElementById('myChart'), nextProps.keys, nextProps.scoreData)
    }
  }
  componentDidMount() {
    this.props.radarChart(document.getElementById('myChart'), this.props.keys, this.props.scoreData)
  }

  render() {
    return (
      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getPreferences}, dispatch)
}

export default connect(null, mapDispatchToProps)(ScoreGraph)
