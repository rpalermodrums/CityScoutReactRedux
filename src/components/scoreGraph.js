import React from 'react'

export default function (props){
  var keys = Object.keys(props.scores).filter((key) => {return key !== 'coordinates'}) ////////
  return keys.map((key) => {
    return (
      <p>
        {key + ": " + props.scores[key]}
      </p>
    )
  })
}
