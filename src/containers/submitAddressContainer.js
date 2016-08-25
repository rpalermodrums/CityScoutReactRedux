import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'
import {browserHistory} from 'react-router'
import fetchScores from '../actions/fetchScores'
import getLocation from '../actions/getLocation'
import GeoSuggest from 'react-geosuggest'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

var text;
class SubmitAddressContainer extends Component {
  constructor(props) {
  super(props)
}
  handleSubmit(event) {
    console.log(this.props) // Just to check
    event.preventDefault();
    text = event.target.firstChild.value;
    this.props.getAddress(text);
    this.props.getLocation(this.location);
    browserHistory.push('preferences')
  }

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
            onSubmit={this.handleSubmit.bind(this)}/>
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
