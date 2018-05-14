
export const UPDATE_MONTH_YEAR = 'UPDATE_MONTH_YEAR';
export const TODAY = 'TODAY';

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