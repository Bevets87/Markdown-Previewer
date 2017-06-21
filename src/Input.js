import React from 'react'

import './Input.css'

const Input = (props) => {
  return (
    <div className='input-container col-sm-6'>
      <textarea className='input' onChange={props.handleOnChange}>{props.value}</textarea>
    </div>
  )
}

export default Input
