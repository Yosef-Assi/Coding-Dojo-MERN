import React, { Component } from 'react'

export default class PropItUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
  render() {
    return (
     <div>
      <h2>{this.props.firstName},{this.props.lastName} </h2>
      <p>{this.state.age}</p>
      <p>hair Color:{this.props.hairColor}</p>
      <button onClick={()=>{this.setState({age:this.state.age+1})}}>Birthday Button for {this.props.firstName} {this.props.lastName}
</button>

       </div>
    )
  }
}

