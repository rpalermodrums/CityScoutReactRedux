import React from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default function() {
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
          <SubmitAddressContainer />
        </div>
        <video autoPlay muted loop poster="" id="bgvid">
          <source src="src/video/landing.mp4" type="video/mp4"></source>
        </video>
      </div>
  )
}
