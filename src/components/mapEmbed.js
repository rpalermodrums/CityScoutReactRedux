import React, {Component} from 'react'

const MapEmbed = function(){
  debugger

  return (
    <iframe height="500"
       width="500"
        src={`http://www.google.com/maps/embed/v1/place?q=${sessionStorage.boro}&zoom=15&key=AIzaSyAwGOmsK9dQ-A3BEUhSpIiWSsZARcNHatM`}
        style={{display: "block", margin: 'auto'}} allowFullScreen />
  )
}

export default MapEmbed
