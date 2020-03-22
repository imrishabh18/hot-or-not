import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{
    display(){
      axios.get("https://try-herok.herokuapp.com/horn")
        .then(res => {
          console.log(res.data);
        })
    }
  render(){
    return(
      <div>
        <button onClick={this.display}>Hello</button>
      </div>
    )
  }
}
export default App;
