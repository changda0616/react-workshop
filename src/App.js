import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Checkbox from './component/checkbox';
import DisplayCheckboxStatus from './component/DisplayCheckboxStatus';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numValue: 1,
      isChecked: false
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  handleCheckboxChange(e){
    this.setState({isChecked: e.target.checked});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Checkbox handleChangeFromParent={this.handleCheckboxChange}/>
          <DisplayCheckboxStatus isCheckedFromSibling={this.state.isChecked}/>
          <button onClick={()=>{this.setState({numValue: ++this.state.numValue})}}>Add number</button>
        </header>
        <h1>{this.state.numValue}</h1>
      </div>
    );
  }
}

export default App;
