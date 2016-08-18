export default function searchReducer(state = {}, action){
  switch(action.type){
    case 'GET_ADDRESS':
      debugger
      return Object.assign({}, state, {address: action.payload})
    default:
      return state
  }
}
