import React from 'react'

import './Button.css'

const Button = props => {
  return (
    <button
      className={`${props.className} ${props.disabled ? 'loading' : ''}`}
      onClick={props.onClick}
      disabled={props.disabled}>
        { props.children }
    </button>
  )
}

export default Button
