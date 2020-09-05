import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../actions/user';
import { isObjectEmpty } from '../utils';

import Button from '../components/Form/Button/Button';
import Input from '../components/Form/Input/Input';
import Facio from '../components/Facio/Facio';
import Alert from '../components/Form/Alert/Alert';

function Login(props) {
  const [credentials, setCredentials] = useState({})
  const [disabled, setDisabled] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (!isObjectEmpty(props.user.login.response)) {
      history.push('/trips')
    }
  }, [props.user.login.response])
  
  useEffect(() => {
    if(!isObjectEmpty(props.user.login.error) && disabled !== false) {
      setDisabled(false)
    }
  }, [props.user.login.error])

  function handleButton() {
    setDisabled(true)
    props.login(credentials)
  }
  
  return (
    <div className="container">
      <div className="center" style={{ marginTop: 64 }}>
        <Facio />
      </div>
      <div className="mt-2">
        {!isObjectEmpty(props.user.login.error)
          ? <Alert condition="error">{props.user.login.error.data.error}</Alert>
          : ''
        }
        <Input
          block
          className="mt-1"
          objkey="email"
          type="text"
          setValue={setCredentials}
          placeholder="Email" />
        <Input
          block
          className="mt-1"
          objkey="password"
          type="password"
          setValue={setCredentials}
          placeholder="Email" />
        <Button
          className="mt-1"
          disabled={disabled}
          onClick={() => handleButton()}>
          LogIn
        </Button>
      </div>
    </div>
  )
}

export default connect(
  state => {
    return {
      user: state.user
    }
  },
  dispatch => {
    return {
      login: credentials => dispatch(login(credentials))
    }
  }
)(Login);
