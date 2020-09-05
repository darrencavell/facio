import React from 'react'

import { handleInput } from '../../../utils'

import './Input.css'

const Input = props => {
  return (
    <input
      className={`${props.block ? 'block' : ''} ${props.className}`}
      type={props.type}
      onChange={e => handleInput(props.objkey, e.target.value, props.setValue)}
      placeholder={props.placeholder} />
  )
}

export default Input