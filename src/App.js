import React from 'react'
import './App.css';
import Person from './Person';


class App extends React.Component{
 state= { B:false }
 toggleshow=()=>{ this.setState({ B: ! this.state.B})}

  render(){
return(
  <div>
    <button onClick={()=>this.toggleshow()}> {this.state.B ? 'Hide' : 'Show'} </button>
     {this.state.B && <Person/>}
  </div>
)

  }
}
export default App;
