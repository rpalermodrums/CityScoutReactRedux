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
    text = event.target.firstChild.value;
    this.props.getAddress(text);
    this.props.fetchScores(text)
    browserHistory.push('/preferences')
  }

  render(){
    return (
      <div>
        <h1>Welcome to CityScout NYC</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='enter address' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address,
    scores: state.scores
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchScores, getAddress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
