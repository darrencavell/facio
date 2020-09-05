import axios from 'axios';

import { createdAt } from '../utils';

export const add = (token, payload) => dispatch => {
  const modified = { ...payload, created_at: createdAt() }
  dispatch({ type: 'TRIP_ADD_LOADING', payload: true })
  axios.post(`https://crudcrud.com/api/558daa38f4a14a28981cbf3d17bfad82/trips`, modified)
    .then(response => {
      console.log(response)
      dispatch({
        type: 'TRIP_ADD',
        payload: response
      })
    })
    .catch(error => {
      dispatch({
        type: "TRIP_ADD_ERROR",
        payload: error.response || error.request || error.message
      })
    })
  dispatch({ type: 'TRIP_ADD_LOADING', payload: false })
}

export const list = token => dispatch => {
  dispatch({ type: 'TRIP_LIST_LOADING', payload: true })
  axios.get(`https://crudcrud.com/api/558daa38f4a14a28981cbf3d17bfad82/trips`, )
    .then(response => {
      dispatch({
        type: 'TRIP_LIST',
        payload: response
      })
    })
    .catch(error => {
      console.log(error)
    })
  dispatch({ type: 'TRIP_LIST_LOADING', payload: false })
}