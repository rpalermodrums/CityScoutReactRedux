import React from 'react';
import PreferencesSliderContainer from '../containers/preferencesSlidersContainer';
import TransitionGroup from 'react-addons-transition-group';

export default function() {
  return(
    <div className="ink-grid" id="container">
      <div className="column-group">
        <div id="preference-bar">
          <PreferencesSliderContainer />
          <div className="">
          </div>
          <div className="">
          </div>
        </div>
      </div>
    </div>
  )
}
