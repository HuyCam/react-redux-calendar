import { UPDATE_MONTH_YEAR } from '../actions/index.js';

export function updateNavigation(state = {}, action) {
    switch(action.type) {
        case UPDATE_MONTH_YEAR:
        console.log('reducer invoked ', action.payload);
          return action.payload;
        default:
          return state;
    }
}