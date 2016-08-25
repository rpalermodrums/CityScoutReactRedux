import React from 'react';
import ScoresResult from '../containers/ScoresResult';
import MapEmbed from './mapEmbed'

export default function() {
  return(
    <div className="results">
      <div className="column-group">
        <div id="result-page">
          <ScoresResult />
        </div>
        <div id="mapEmbed">
          <MapEmbed />
        </div>
      </div>
    </div>
  )
}
