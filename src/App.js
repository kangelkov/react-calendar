import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Header from './components/Header'
import CalendarBig from "./components/CalendarBig";
import { selectMonthIndex } from "./components/CalendarSlice"

import { getMonth } from "./utils";

function App() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const monthIndex = useSelector(selectMonthIndex)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

  return (
    <>
      <Header />
      <CalendarBig month={currentMonth} />
    </>
  );
}

export default App;
