import React, { Component } from 'react';
<<<<<<< HEAD
import ReactChartkick, { LineChart } from 'react-chartkick';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)
=======
import './App.css';
import Search from './component/Search';

>>>>>>> da068e936c08220a5abf2d5ffb8c54376744ee76

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div> <Search/>
    </div> 
>>>>>>> da068e936c08220a5abf2d5ffb8c54376744ee76
    );
  }
}

export default App;
