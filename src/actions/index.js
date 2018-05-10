
export const UPDATE_MONTH_YEAR = 'UPDATE_MONTH_YEAR';

export function updateMonthYear(year, month) {
    return {
        type: UPDATE_MONTH_YEAR,
        payload: { year, month }
    }
}