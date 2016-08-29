import React, {Component} from 'react'

export default class extends Component {
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
