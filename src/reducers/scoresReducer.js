export default function scoresReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SCORES':
      return {scores: action.payload};
      break;
    default:
      return state
  }
}
