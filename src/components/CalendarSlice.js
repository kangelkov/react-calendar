import { createSlice } from '@reduxjs/toolkit'
import dayjs from "dayjs"

const initialState = {
    monthIndex: dayjs().month(),
}

export const CalendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        nextMonth: (state) => {
            state.monthIndex += 1;
        },
        previousMonth: (state) => {
            state.monthIndex -= 1;
        },
        thisMonth: (state) => {
            state.monthIndex = dayjs().month();
        },
    }
})

export const selectMonthIndex = (state) => state.calendar.monthIndex

export const { nextMonth, previousMonth, thisMonth } = CalendarSlice.actions

export default CalendarSlice.reducer
