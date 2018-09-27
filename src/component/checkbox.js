import React from 'react'

export default (props) => {
  return (
    <div>
      <input 
        type="checkbox" 
        onChange={props.handleChangeFromParent}
      />
    </div>
  )
}
