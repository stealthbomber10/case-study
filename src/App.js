import React, { Component } from 'react';
import './App.css';
import StartDate from './component/StartDate';
import EndDate from './component/EndDate'; 

class App extends Component {
  render() {
    return (
  <div> <StartDate/>
  <EndDate/>  </div> 
    );
  }
}

export default App;
