import { UPDATE_MONTH_YEAR, TODAY } from '../actions/index.js';

export function updateNavigation(state = {}, action) {
    switch(action.type) {
        case UPDATE_MONTH_YEAR:
          return action.payload;
        default:
          return state;
    }
}

export function getToday(state = {}, action) {
  switch(action.type) {
    case TODAY:
      return action.payload;
    default: 
      return state;
  }
}