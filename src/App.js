import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Checkbox from './component/checkbox';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isCheckboxChecked: false
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  handleCheckboxChange(e){
    this.setState({...this.state, isCheckboxChecked: e.target.checked});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Checkbox handleChangeFromParent={this.handleCheckboxChange}/>
        </header>
        {`${this.state.isCheckboxChecked}`}

      </div>
    );
  }
}

export default App;
