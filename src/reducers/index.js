import { combineReducers } from 'redux';
import { updateNavigation }from './update_month_year';

const rootReducer = combineReducers({
  time: updateNavigation
});

export default rootReducer;
