import React, { Component } from 'react'

export default class PropItUp extends Component {
  render() {
    return (
     <div>
      <h2>{this.props.firstName},{this.props.lastName} </h2>
      <p>{this.props.age}</p>
      <p>hair Color:{this.props.hairColor}</p>
      </div>
    )
  }
}

