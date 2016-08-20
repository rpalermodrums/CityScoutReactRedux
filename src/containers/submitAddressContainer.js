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
    browserHistory.push('/preferences')
  }

  render(){
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id="bar" type='text' placeholder='Enter Address' />
          <input type='submit' />
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
