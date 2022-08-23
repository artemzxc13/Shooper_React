import { combineReducers } from 'redux';
import filtersReducer from './filters';
import shoesReducer from './shoes';
const rootReducer = combineReducers({
  filtersReducer: filtersReducer,
  shoesReducer: shoesReducer,
});

export default rootReducer;
