import React, {Component} from 'react';

const SubmitAddressContainer = class extends Component {
  handleSubmit(event) {
    event.preventDefault();
    getAddress(event);
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAddress}, dispatch)
}

export default connect(mapDispatchToProps)(SubmitAddressContainer)
