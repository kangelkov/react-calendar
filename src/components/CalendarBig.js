import React from 'react';
import { makeStyles } from "@mui/styles";
import DayBox from "./DayBox";

const useStyles = makeStyles({
    dayBoxesWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        maxWidth: 1410,
    }
});

function CalendarBig(month) {
    const classes = useStyles();
    return (
        <div className={classes.dayBoxesWrapper}>
            {month.month.map((week, i) => (
                <React.Fragment key={i}>
                    {week.map((day, idx) => (
                        <DayBox day={day} key={idx}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default CalendarBig;
