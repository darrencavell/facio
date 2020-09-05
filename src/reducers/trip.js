export const initialState = {
  lists: {},
  add: {}
}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'TRIP_ADD_LOADING':
      return {
        ...state,
        add: {
          ...state.add,
          loading: action.payload
        }
      }
    case 'TRIP_LIST_LOADING':
      return {
        ...state,
        lists: {
          ...state.lists,
          loading: action.payload
        }
      }
    case 'ADD_TRIP':
      return {
        ...state,
        add: {
          ...state.add,
          response: action.payload
        }
      }
    case 'TRIP_LIST':
      return {
        ...state,
        lists: {
          ...state.lists,
          response: action.payload.data
        }
      }
    default:
      return state
  }
}  