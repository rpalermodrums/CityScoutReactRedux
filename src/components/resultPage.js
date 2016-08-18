import React from 'react';
import ScoresResult from '../containers/ScoresResult';
import TransitionGroup from 'react-addons-transition-group';

export default function() {
  return(
    <div className="ink-grid" id="container">
      <div className="column-group">
        <div id="result-page">
          <ScoresResult />
        </div>
      </div>
    </div>
  )
}
