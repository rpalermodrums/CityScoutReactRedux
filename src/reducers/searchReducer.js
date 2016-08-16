export default function searchReducer(state = {}, action){
  switch(action.type){
    case 'GET_ADDRESS':
      return Object.assign({}, state, {query: action.payload})
    default:
      return state
  }
}
