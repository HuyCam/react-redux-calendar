import axios from 'axios';

export const UPDATE_MONTH_YEAR = 'UPDATE_MONTH_YEAR';
export const TODAY = 'TODAY';
export const TOGGLE_MODE = 'TOGGLE_MODE';
export const GET_NOTES = 'GET_NOTES';
export const SELECTED_DATE = 'SELECTED_DATE';

// display mode
export const MONTHS_MODE = 'MONTHS';
export const DAYS_MODE = 'DAYS';

export function updateMonthYear(year, month) {
    return {
        type: UPDATE_MONTH_YEAR,
        payload: { year, month }
    }
}

export function updateToday(year, month, date) {
    return {
        type: TODAY,
        payload: { year, month , date}
    }
}

export function toggleMode(mode) {
  return {
      type: TOGGLE_MODE,
      payload: mode
  }
}

export function fetchNotes() {
    const request = axios.get('https://mighty-wave-94852.herokuapp.com/notes');

    return {
        type: GET_NOTES,
        payload: request
    }
}

export function selectedDate(year, month, date) {
    // date should be just a object like today { year, month , date}
    return {
        type: SELECTED_DATE,
        payload: {
            year,
            month,
            date
        }
    };
}