
export const UPDATE_MONTH_YEAR = 'UPDATE_MONTH_YEAR';
export const TODAY = 'TODAY';
export const TOGGLE_MODE = 'TOGGLE_MODE';

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

