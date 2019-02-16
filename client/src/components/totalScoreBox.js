import React from 'react'

export default function(props){
  return (
    <div id="totalScoreBox">
      <h3>{sessionStorage.address}</h3>
      <h4>{sessionStorage.boro} -- {sessionStorage.neighborhood}</h4>
      <h2 className='totalScoreBox'>Total Score: {props.totalScore}</h2>
    </div>
  )
}
