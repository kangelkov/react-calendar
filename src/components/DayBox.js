import React from 'react';
import dayjs from "dayjs";

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

import events from "../events.json"

const useStyles = makeStyles({
    dayBox: {
        width: 200,
        height: 120,
        outline: "1px solid #D3D3D3",
        marginTop: 1,
    },
    dateNumber: {
        color: "#1C0000",
        textAlign: "center",
        paddingTop: 10,
    },
    blueBox: {
        backgroundColor: "#39C2F7"
    }
});

function DayBox(day) {
    function checkToday() {
        return (day.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY"))
    }

    let eventFound = events.find(el => el.date === day.day.format("DD-MM-YY"))

    const classes = useStyles();
    return (
        <>
            <Box className={`${checkToday() ? `${classes.blueBox} ${classes.dayBox}` : `${classes.dayBox}`}`}>
                <Typography className={classes.dateNumber}>
                    {day.day.format('DD')}
                </Typography>
                <Typography align="center">
                    {eventFound !== undefined && eventFound.description}
                </Typography>
            </Box>
        </>
    );
}

export default DayBox;
