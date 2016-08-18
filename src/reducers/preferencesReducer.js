export default function preferencesReducer(state = {}, action) {

  switch (action.type) {
    case 'GET_PREFERENCES':
      debugger
      return Object.assign({}, state, {preferences: action.payload})
    default:
      return state
  }
}
