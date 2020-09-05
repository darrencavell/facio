export default (state = {
  login: {}
}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: {
          ...state.login,
          response: action.payload.token
        }
      }
    case 'LOGIN_LOADING':
      return {
        ...state,
        login: {
          ...state.login,
          loading: action.payload
        }
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        login: {
          ...state.login,
          error: action.payload
        }
      }
    default:
      return state
  }
}