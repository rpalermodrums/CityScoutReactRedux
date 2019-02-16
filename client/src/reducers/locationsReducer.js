export default function locationReducer(state = {}, action){
  switch(action.type){
    case 'GET_LOCATION':
      return Object.assign({}, state, {coords: action.payload})
    default:
      return state
  }
}
