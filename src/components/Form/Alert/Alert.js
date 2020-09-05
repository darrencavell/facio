import React from 'react'

import './Alert.css'

const Alert = props => {
  return (
    <div className={`alert ${props.condition}`}>
      {props.children}
    </div>
  )
}

export default Alert