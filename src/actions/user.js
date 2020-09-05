import axios from 'axios';

export const login = payload => dispatch => {
  dispatch({ type: 'LOGIN_LOADING', payload: true })
  axios.post("https://reqres.in/api/login", payload)
    .then(response => {
      const { data } = response
      dispatch({
        type: 'LOGIN',
        payload: data
      })
    })
    .catch(error => {
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response || error.request || error.message
      })
    })
  dispatch({ type: 'LOGIN_LOADING', payload: false })
}