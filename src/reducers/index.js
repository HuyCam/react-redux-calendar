import { combineReducers } from 'redux';
import { updateNavigation, getToday }from './update_month_year';
import toggleMode from './toggle_mode';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  time: updateNavigation,
  today: getToday,
  mode: toggleMode,
  form: formReducer
});

export default rootReducer;
