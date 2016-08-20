import React from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default function() {
  return(
    <ReactCSSTransitionGroup
      component="div"
      className="search"
      transitionName="route"
      transitionEnterTimeout={600}
      transitionAppearTimeout={600}
      transitionLeaveTimeout={600}
      transitionAppear={true}>
      <div className="container-fluid" id="container">>
          <div id="landing-page">
          <SubmitAddressContainer />
        </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}
