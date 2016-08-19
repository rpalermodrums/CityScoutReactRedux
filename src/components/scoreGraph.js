import React, {Component} from 'react'

export default class extends Component {
  // var keys = Object.keys(props.scores).filter((key) => {return key !== 'coordinates'}) ////////

  // Executes radarChart after element has been rendered by the DOM
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
