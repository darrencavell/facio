import reducer , { initialState } from '../../reducers/user.js'

describe('reducer user redux', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })
  it('should handle LOGIN', () => {
    expect(
      reducer(initialState,
      {
        type: 'LOGIN',
        payload: {
          tokn: 'token'
        }
      })
    ).toMatchSnapshot()
  })
  it('should handle LOGIN_LOADING', () => {
    expect(
      reducer(initialState,
      {
        type: 'LOGIN_LOADING',
        payload: true
      })
    ).toMatchSnapshot()
  })

  it('should handle LOGIN_ERROR', () => {
    expect(
      reducer(initialState,
      {
        type: 'LOGIN_ERROR',
        payload: {
          error: 'Username not found'
        }
      })
    ).toMatchSnapshot()
  })
})