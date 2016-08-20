import React from 'react';
import PreferencesSliderContainer from '../containers/preferencesSlidersContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default function() {
  return(
    <div className="container">
        <ReactCSSTransitionGroup
          className="preferences-box"
          component="div"
          transitionName="route"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionLeaveTimeout={400}
          transitionAppear={true}>
            <div className="slider-title col-md-12">
              <h3>Choose your neighborhood categories</h3>
            </div>
            <div className="preference-bar">
              <PreferencesSliderContainer />
              <div className="">
              </div>
              <div className="">
              </div>
            </div>
        </ReactCSSTransitionGroup>
    </div>
  )
}
