export default function scoresReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SCORES':
    debugger
      return Object.assign({}, state, {scores: action.payload})
    default:
      return state
  }
}
