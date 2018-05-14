import { combineReducers } from 'redux';
import { updateNavigation, getToday }from './update_month_year';

const rootReducer = combineReducers({
  time: updateNavigation,
  today: getToday
});

export default rootReducer;
