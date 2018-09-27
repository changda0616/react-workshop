import React, { Component } from 'react'

export default class DisplayCheckboxStatus extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <p>The sibling component 'Checkbox' is checked: <p style={{color: 'red', display: 'inline-block'}}>{`${this.props.isCheckedFromSibling}`}</p></p>
      </div>
    )
  }
}
