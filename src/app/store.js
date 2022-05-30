import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../components/CalendarSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});
