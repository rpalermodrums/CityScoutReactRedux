import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'
import Address from '../components/address'

var text;
class SubmitAddressContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    text = event.target.firstChild.value;
    getAddress(text);
  }
  render(){
    debugger;
    return (
      <div>
        <h1>Welcome to CityScout NYC</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='enter address' />
          <input type='submit' />
          <Address text={text}/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress}, dispatch)
}

export default connect(null, mapDispatchToProps)(SubmitAddressContainer)
