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
    debugger
    console.log(this.props) // Just to check
    // event.preventDefault(); // Wouldn't work with preventDefault somehow - error: preventDefault is not a function
    text = event.label; // Object {label: "235 Flatbush Avenue, Brooklyn, NY, United States", placeId: "ChIJsUpk6K5bwokRrA98w3GiK4w", isFixture: false, gmaps: Object, location: Object}
    var location = event.location; // Object {lat: 40.6811549, lng: -73.97486609999999}
    this.props.getAddress(text);
    sessionStorage.address = text
    this.props.getLocation(location);
    browserHistory.push('/preferences')
  }
  render(){
    Object.keys(sessionStorage).forEach((key) => sessionStorage.removeItem(key))
    return(
        <div className="" id="landing-page">
          <div id="landing-page">
          <ReactCSSTransitionGroup
            transitionName="logo"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionAppear={true}>
              <h1 id="title">CityScout</h1>
            </ReactCSSTransitionGroup>
            <SubmitAddressContainer handleSubmit={this.handleSubmit.bind(this)} route={'/preferences'} />
          </div>
          <video autoPlay muted loop poster="" id="bgvid">
            <source src="src/video/landing.mp4" type="video/mp4"></source>
          </video>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress, getLocation}, dispatch)
}


export default connect(null, mapDispatchToProps)(LandingPage)
