import React from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer'

export default function() {
  return(
    <div className="ink-grid" id="container">
      <div className="column-group">
        <div id="landing-page" className="all-100">
          <h1>Welcome to CityScout NYC</h1>
          <SubmitAddressContainer />
        </div>
      </div>
    </div>
  )
}
