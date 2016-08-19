import React from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default function({ children, location }) {
  return(
      <div className="ink-grid" id="container">
        <div className="column-group">
          <div id="landing-page" className="all-100">
            <h1>Welcome to CityScout NYC</h1>
            <SubmitAddressContainer />
          </div>
        </div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
}
