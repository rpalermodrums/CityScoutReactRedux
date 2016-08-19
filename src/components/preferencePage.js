import React from 'react';
import PreferencesSliderContainer from '../containers/preferencesSlidersContainer';
import TransitionGroup from 'react-addons-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default function() {
  return(
    <ReactCSSTransitionGroup
      component="div"
      className="ink-grid"
      transitionName="route"
      transitionEnterTimeout={600}
      transitionAppearTimeout={600}
      transitionLeaveTimeout={400}
      transitionAppear={true}>
      <div className="column-group">
      <div className="slider-title"><h3>Choose your neighborhood categories</h3></div>
        <div id="preference-bar">
          <PreferencesSliderContainer />
          <div className="">
          </div>
          <div className="">
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}
