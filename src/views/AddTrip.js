import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleInput, isObjectEmpty } from '../utils';
import { add as addTrip } from '../actions/trip';

import Button from '../components/Form/Button/Button';
import Input from '../components/Form/Input/Input';
import Select from '../components/Form/Select/Select';
import Title from '../components/Typography/Title/Title';
import Subtitle from '../components/Typography/Subtitle/Subtitle';
import Alert from '../components/Form/Alert/Alert';

const TripAdd = props => {
  const status = {
    PENDING: 'Pending',
    STARTED: 'Started',
    COMPLETED: 'Completed'
  }
  const [trip, setTrip] = useState({})
  const [disabled, setDisabled] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if ( props.trip.add.response) {
      const { status } = props.trip.add.response
      console.log(status)
      if (status === 201) {
        history.push('/trips')
      }
    }
  }, [props.trip.add.response])

  useEffect(() => {
    if(!isObjectEmpty(props.trip.add.error) && disabled !== false) {
      setDisabled(false)
    }
  }, [props.trip.add.error])

  function handleButton() {
    setDisabled(true)
    props.addTrip(props.user.token, trip)
  }

  return (
    <div className="container">
      <Title>Add Trip</Title>
      {!isObjectEmpty(props.trip.add.response) && props.trip.add.response.status === 201
        ? <Alert condition="success">Trip added successfuly@</Alert>
        : ''
      }
      <div className="mt-1">
        <Subtitle>From Station</Subtitle>
        <Input
          block
          objkey="start_station"
          type="text"
          setValue={setTrip}
          placeholder="" />
      </div>
      <div className="mt-1">
        <Subtitle>To Station</Subtitle>
        <Input
          block
          objkey="end_station"
          type="text"
          setValue={setTrip}
          placeholder="" />
      </div>
      <div className="mt-1">
        <Subtitle>Driver Name</Subtitle>
        <Input
          block
          objkey="driver_name"
          type="text"
          setValue={setTrip}
          placeholder="" />
      </div>
      <div className="mt-1">
        <Subtitle>Status</Subtitle>
        <Select 
          block
          objkey="status"
          setValue={setTrip} 
          data={status} />
      </div>
      <div className="mt-1">
        <Subtitle>ETA</Subtitle>
        <Input
          block
          objkey="eta"
          type="text"
          setValue={setTrip}
          placeholder="" />
      </div>
      <Button
        className="mt-1"
        disabled={disabled}
        onClick={() => handleButton()}>
        Create Trip
      </Button>
    </div>
  )
}

export default connect(
  state => {
    return {
      user: state.user,
      trip: state.trip
    }
  },
  dispatch => {
    return {
      addTrip: (token, payload) => dispatch(addTrip(token, payload))
    }
  }
)(TripAdd)
