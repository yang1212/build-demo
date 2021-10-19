import React, { Component } from 'react'
import { connect } from 'react-redux'

class Brother extends Component {
  render() {
    const { value } = this.props
    return (
      <p>Brother 共享: {value}</p>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}
  
export default connect(
  mapStateToProps
)(Brother);
