import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { list as listTrip } from '../actions/trip';

import Facio from '../components/Facio/Facio';
import Trip from '../components/Trip/Trip';
import Title from '../components/Typography/Title/Title';

const Trips = props => {
  const history = useHistory()

  useEffect(() => {
    props.listTrip(props.user.token)
  }, [])

  return (
    <div className="container">
      <Facio />
      <div>
        Hi ! Welcome to Facio, you are ready to go now.
      </div>
      <div className="mt-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top' }}>
        <Title>Trip Lists</Title>
        <span style={{ fontSize: 14, fontWeight: 300, marginTop: 8 }} onClick={() => history.push('/trips/add')}>Add Trip</span>
      </div>
      <div className="mt-1">
        {
          props.trip && props.trip.lists && props.trip.lists.response
            ? props.trip.lists.response.map(t => {
              return (
                <Trip key={t._id} data={t} />
              )
            })
            : 'No Data Found'
        }
      </div>
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
      listTrip: token => dispatch(listTrip(token))
    }
  }
)(Trips)