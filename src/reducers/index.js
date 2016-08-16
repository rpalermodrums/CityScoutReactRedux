import { combineReducers } from 'redux';

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer
  // crimes: CrimesReducer,
  // parks: ParksReducer,
  // schools: SchoolsReducer,
  // subways: SubwaysReducer
});

export default rootReducer;
