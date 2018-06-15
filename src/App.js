import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={value:''}
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  render() {
    console.log('in render',this.state.value);
    return (
      <div>
        <h1>Hello</h1>
        
        <input type="text" value={this.state.value} onChange={(event)=>this.handleChange(event)}/>
        
      </div>
    );
  }
 
}

export default App;
