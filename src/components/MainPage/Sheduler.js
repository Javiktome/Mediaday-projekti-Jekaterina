import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import time from './timetabel.PNG';


function Sheduler() {
    let dated = new Date("April 4 2022");
    const [date, setDate] = useState(dated)
    const onChange = date => {
        setDate(date);
    };
    return (
        <div className=" d-flex">
            <div className="calendar">

                <h1 className="date-heading">Event Date</h1>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
            <div id="shedule">
                <img className="shedule-img" src={time} alt="timetable" />
            </div>
        </div>
    )
}

export default Sheduler
