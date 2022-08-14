import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

let reducers = combineReducers({
  account: accountReducer
});

export default reducers;