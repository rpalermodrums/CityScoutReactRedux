import { combineReducers } from 'redux';
import searchReducer from './searchReducer'

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer
  // crimes: CrimesReducer,
  // parks: ParksReducer,
  // schools: SchoolsReducer,
  // subways: SubwaysReducer
});

export default rootReducer;
