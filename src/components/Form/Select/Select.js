import React from 'react'

import { handleInput } from '../../../utils'

import './Select.css'

const Select = props => {
  return (
    <select
      onChange={e => handleInput(props.objkey, e.target.value, props.setValue)}
      className={`${props.block ? 'block' : ''} ${props.className}`}>
      {Object.entries(props.data).map(([_, val]) => {
        return (
          <option key={val} value={val}>{val}</option>
        )
      })}
    </select>
  )
}

export default Select
