import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import GeoSuggest from 'react-geosuggest'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import getAddress from '../actions/getAddress'
import fetchScores from '../actions/fetchScores'
import getLocation from '../actions/getLocation'

var text
// var location;
class SubmitAddressContainer extends Component {
  // handleSubmit(event) {
  //   debugger
  //   console.log(this.props) // Just to check
  //   // event.preventDefault(); // Wouldn't work with preventDefault somehow - error: preventDefault is not a function
  //   text = event.label; // Object {label: "235 Flatbush Avenue, Brooklyn, NY, United States", placeId: "ChIJsUpk6K5bwokRrA98w3GiK4w", isFixture: false, gmaps: Object, location: Object}
  //   this.location = event.location; // Object {lat: 40.6811549, lng: -73.97486609999999}
  //   this.props.getAddress(text);
  //   sessionStorage.address = text
  //   this.props.getLocation(this.location);
  //   browserHistory.push(this.props.route)
  // }

  render(){
    return (
      <ReactCSSTransitionGroup
        component={"div"}
        transitionName="landing"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={false}>
          <GeoSuggest
            style={{'suggests': {'listStyleType': 'none'}, 'suggestItem': {'color':'white', 'cursor': 'pointer'}}}
            className="button text"
            id="textBar"
            placeholder="Enter address"
            // onSuggestSelect is triggered when a suggest is selected. Location object contains lat long.
            onSuggestSelect={this.props.handleSubmit.bind(this)}/>
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address,
    coords: state.coords
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchScores, getAddress, getLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
