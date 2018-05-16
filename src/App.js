import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './component/Search';
import Charts from './component/Charts';

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
        <Search/> 
    </div> 
=======
        <Charts />
        <Search/>
      </div> 
>>>>>>> a2e326006df092ec1a4cb3229755f1b663706f47
    );
  }
}

export default App;
