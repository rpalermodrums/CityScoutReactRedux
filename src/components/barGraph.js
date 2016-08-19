import React, {Component} from 'react'

export default class extends Component {
  // var keys = Object.keys(props.scores).filter((key) => {return key !== 'coordinates'}) ////////

  // Executes barChart after element has been rendered by the DOM
  componentDidMount() {
    this.props.barChart(document.getElementById('barChart'), this.props.keys, this.props.averages, this.props.scores)
  }

    render() {
      return (
        <div>
          <canvas id="barChart" width="400" height="400"></canvas>
        </div>
      )
    }
}
