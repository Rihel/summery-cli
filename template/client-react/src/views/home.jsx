import React, { Component } from 'react'
import { connect,bindActionCreators } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}

@connect(mapStateToProps)
export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div>
        首页
      </div>
    )
  }
}