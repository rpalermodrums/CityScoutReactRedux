import React from 'react';
import SubmitAddressContainer from '../containers/submitAddressContainer';



export default function() {
  return(


      <div className="" id="landing-page">
        <div id="landing-page">
          <h1 id="title">CityScout</h1>
          <SubmitAddressContainer />
        </div>
        <video autoPlay muted loop poster="" id="bgvid">
          <source src="src/video/landing.mp4" type="video/mp4"></source>
        </video>
      </div>
  )
}
