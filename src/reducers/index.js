import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import scoresReducer from './scoresReducer'
import preferencesReducer from './preferencesReducer'
import locationsReducer from './locationsReducer'

// Mapping of state
const rootReducer = combineReducers({
  address: searchReducer,
  preferences: preferencesReducer,
  scores: scoresReducer,
  coords: locationsReducer
});

export default rootReducer;
