import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'
import {browserHistory} from 'react-router'
import fetchScores from '../actions/fetchScores'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

var text;
class SubmitAddressContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    text = event.target.firstChild.value;
    debugger
    this.props.getAddress(text);
    browserHistory.push('preferences')
  }

  render(){
    return (
      <ReactCSSTransitionGroup
        component={"div"}
        transitionName="landing"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}>
            <form id="bar" onSubmit={this.handleSubmit.bind(this)}>
              <input className="button text" id="textBar" type='text' placeholder='Enter Address' />
              {/* <input type='submit' /> */}
            </form>
      </ReactCSSTransitionGroup>
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
