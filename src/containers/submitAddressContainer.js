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
    this.props.getAddress(text);
    
  }

  render(){
    return (
      <div>
        <h1>Welcome to CityScout NYC</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='enter address' />
          <input type='submit' />
          <Address text={this.props.address}/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address.address
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
