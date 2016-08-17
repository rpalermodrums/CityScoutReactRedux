import { combineReducers } from 'redux';
import searchReducer from './searchReducer'

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer
  preferences: scoresReducer
});

export default rootReducer;
