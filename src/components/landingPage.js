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
      <div className="ink-grid" id="container">
        <div className="column-group">
          <div id="landing-page" className="all-100">
            <SubmitAddressContainer />
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}
