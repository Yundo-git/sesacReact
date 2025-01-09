import React, { Component } from 'react'

export default class Handler extends Component {

    state={
        title : 'Hello world'
    }
    
  render() {
    return (
        <>
      <div>{this.state.title}</div>

      <button onClick={()=>{
            this.setState({title:'goodbye world'})
      }}>goodbye</button>

<button onClick={()=>{
            this.setState({title:'Hello world'})
      }}>hello</button>
      </>
    )
  }
}
