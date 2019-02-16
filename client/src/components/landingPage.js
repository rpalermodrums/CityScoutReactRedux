import React, {Component} from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getAddress from '../actions/getAddress'
import getLocation from '../actions/getLocation'


var text
class LandingPage extends Component{
  handleSubmit(event) {
    console.log(this.props)
    text = event.label;
    var location = event.location;
    this.props.getAddress(text);
    sessionStorage.address = text
    this.props.getLocation(location);
    browserHistory.push('/preferences')
  }

  render(){
    Object.keys(sessionStorage).forEach((key) => sessionStorage.removeItem(key))
    return(
      <div className="">
        <div id="landing-page" >
          <ReactCSSTransitionGroup
            transitionName="logo"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionAppear={true}>
          </ReactCSSTransitionGroup>
          <SubmitAddressContainer handleSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress, getLocation}, dispatch)
}

export default connect(null, mapDispatchToProps)(LandingPage)
