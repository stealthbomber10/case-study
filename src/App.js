import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
      </div>
    );
  }
}

export default App;
