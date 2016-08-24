import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'
import {browserHistory} from 'react-router'
import fetchScores from '../actions/fetchScores'

var text;
class SubmitAddressContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();

    text = event.target.children[1].value;
    this.props.getAddress(text);
    browserHistory.push(this.props.route)
  }

  render(){
    return (
        <div>
          <form id="bar" onSubmit={this.handleSubmit.bind(this)}>
            <script src='http://use.edgefonts.net/amaranth.js'></script>
            <input className="button text" id="textBar" type='text' placeholder='Enter Address' />
            {/* <input type='submit' /> */}
          </form>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchScores, getAddress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
