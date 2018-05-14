import { combineReducers } from 'redux';
import { updateNavigation, getToday }from './update_month_year';
import toggleMode from './toggle_mode';

const rootReducer = combineReducers({
  time: updateNavigation,
  today: getToday,
  mode: toggleMode
});

export default rootReducer;
