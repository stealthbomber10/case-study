import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
// import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';
import Search from './component/Search';

ReactChartkick.addAdapter(Chart)



class App extends Component {
  render() {
    return (
      <div>
        <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
        <Search/>
    </div> 
    );
  }
}

export default App;
