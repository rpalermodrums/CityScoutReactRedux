import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'

class Search extends Component {
  render(){
    debugger;
    return (
      <div>
        <h1>Welcome to CityScout NYC</h1>
        <form>
          <input type='text' placeholder='enter address' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
