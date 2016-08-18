import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import scoresReducer from './scoresReducer'
import preferencesReducer from './preferencesReducer'

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer,
  preferences: preferencesReducer,
  scores: scoresReducer
});

export default rootReducer;
