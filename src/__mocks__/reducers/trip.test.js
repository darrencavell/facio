import reducer , { initialState } from '../../reducers/trip.js'

describe('reducer trip redux', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })
  it('should handle TRIP_LIST', () => {
    expect(
      reducer(initialState,
      {
        type: 'TRIP_LIST',
        payload: {
          data: {
            "start_station": "Surabaya",
            "end_station": "Semarang",
            "eta": "2020-08-20 00:00:00",
            "status": "Transit",
            "driver_name": "John Doe",
            "created_at": "2020-08-18 17:12:00",
            "_id": "5f521f25d899cd03e8b4de79"
          }
        }
      })
    ).toMatchSnapshot()
  })
  it('should handle TRIP_LIST_LOADING', () => {
    expect(
      reducer(initialState,
      {
        type: 'TRIP_LIST',
        payload: true
      })
    ).toMatchSnapshot()
  })

  it('should handle ADD_TRIP', () => {
    expect(
      reducer(initialState,
      {
        type: 'ADD_TRIP',
        payload: {
          data: {
            "start_station": "Surabaya",
            "end_station": "Semarang",
            "eta": "2020-08-20 00:00:00",
            "status": "Transit",
            "driver_name": "John Doe",
            "created_at": "2020-08-18 17:12:00"
          }
        }
      })
    ).toMatchSnapshot()
  })
  
  it('should handle TRIP_ADD_LOADING', () => {
    expect(
      reducer(initialState,
      {
        type: 'TRIP_ADD_LOADING',
        payload: true
      })
    ).toMatchSnapshot()
  })
})