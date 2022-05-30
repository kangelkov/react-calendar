import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import dayjs from 'dayjs'

import { makeStyles } from "@mui/styles";
import { Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { nextMonth, previousMonth, thisMonth, selectMonthIndex } from './CalendarSlice'

const useStyles = makeStyles({
    headerWrapper: {
        padding: "10px 0px 10px 28px",
        margin: 10,
        display: "flex",
        alignItems: "center",
        gap: "35px"
    },
});

function Header() {
    const dispatch = useDispatch()
    const monthIndex = useSelector(selectMonthIndex)
    const classes = useStyles();
    return (
        <header className={classes.headerWrapper}>
            <Typography variant="h6">
                Google Calendar
            </Typography>
                <Button onClick={() => dispatch(thisMonth())} variant="outlined">today</Button>
            <div>
                <ArrowBackIosNewIcon onClick={() => dispatch(previousMonth())}/>
                <ArrowForwardIosIcon onClick={() => dispatch(nextMonth())}/>
            </div>
            <Typography variant="h6" >
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </Typography>
        </header>
    );
}

export default Header;
