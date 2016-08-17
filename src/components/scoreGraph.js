import React, {Component} from 'react'

export default class extends Component {
  // var keys = Object.keys(props.scores).filter((key) => {return key !== 'coordinates'}) ////////

  componentDidMount() {
    this.props.makeGraph(document.getElementById('myChart'))
  }

    render() {
      debugger
      return (
        <div>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      )
    }
}
