import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.css';
import Search from './component/Search';
import Charts from './component/Charts';

class App extends Component {
  render() {
    return (
      <div>
        <Charts />
        <Search />
      </div> 
    );
  }
}

export default App;
