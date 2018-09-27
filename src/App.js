import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Checkbox from './component/checkbox';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Checkbox handleChangeFromParent={(e)=>{console.log(e)}}/>
        </header>
      </div>
    );
  }
}

export default App;
