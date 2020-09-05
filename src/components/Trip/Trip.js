import React from 'react'

import Subtitle from '../../components/Typography/Subtitle/Subtitle'

import './Trip.css'

const Trip = props => {
  const { data } = props
  return (
    <div className="trip">
      <Subtitle>{`${data.start_station} - ${data.end_station}`}</Subtitle>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 14, fontWeight: 300 }}>{data.driver_name}</span>
        <span style={{ fontSize: 14, fontWeight: 300 }}>{data.status}</span>
      </div>
    </div>
  )
}

export default Trip
