import React from 'react';
import ScoresResult from '../containers/ScoresResult';
import SubmitAddressContainer from '../containers/submitAddressContainer'

export default function() {
  return(
    <div className="ink-grid">
      <div className="column-group">
        <div id="result-page">
          <ScoresResult />
          <SubmitAddressContainer />
        </div>
      </div>
    </div>
  )
}
