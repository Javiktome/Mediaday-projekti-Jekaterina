import React from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import fiLocale from "@fullcalendar/core/locales/fi";

import eventData from "../../data/events.json";

const Calendar = () => (
  <div className="calendar-view">
    <FullCalendar
      locale="fi"
      locales={[fiLocale]}
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGrid"
      dayHeaderContent=""
      allDaySlot={false}
      slotLabelFormat={{hour: "numeric", minute: "2-digit"}}
      headerToolbar={false}
      slotMinTime="10:00:00"
      slotMaxTime="24:00:00"
      height={700}
      views={{
        timeGrid: {
          visibleRange: {
            start: "2022-04-01",
            end: "2022-04-02",
          },
        },
      }}
      events={eventData.events.map((data) => {
        const [day, month, year] = data.startDate.split(".").map(Number);
        const [hour, minute] = data.startTime.split(":").map(Number);

        return {
          title: data.title,
          start: new Date(year, month - 1, day, hour, minute),
          end: new Date(year, month - 1, day, hour + 2, minute),
          url: `/event/${data.videoUrl}`,
        };
      })}
    />
  </div>
);

export default Calendar;



/*

import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent, EventSettingsModel, ViewDirective } from '@syncfusion/ej2-react-schedule'
import React from 'react';
import './Calender.css'

class Calender extends React.Component {
    private LocalData = [
        {
            id: 1,
            Subject: 'Tulevaisuuden ratkaisut elokuvatuotannossa',
            StartTime: new Date(2022, 3, 1, 10, 0),
            EndTime: new Date(2022, 3, 1, 11, 0),
            Location: 'Fireframe',
            Speaker: 'Mikko Kodisoja',
            Url: "https://www.google.com"
        },
        {
            id: 2,
            Subject: 'Käyttäjäkokemuksen merkitys IT-järjestelmissä',
            StartTime: new Date(2022, 3, 1, 11, 0),
            EndTime: new Date(2022, 3, 1, 12, 0),
            Location: 'Swappie',
            Speaker: 'Sami Marttinen'
            Url: "https://www.google.com"
        },
        {
            id: 3,
            Subject: 'Yrittäjyys korkean teknologian alalla',
            StartTime: new Date(2022, 3, 1, 12, 0),
            EndTime: new Date(2022, 3, 1, 14, 0),
            Location: 'FlyAR',
            Speaker: 'Frans Tihveräinen'
        },
        {
            id: 4,
            Subject: 'Kamerauutuudet indie-tuotannossa',
            StartTime: new Date(2022, 3, 1, 14, 0),
            EndTime: new Date(2022, 3, 1, 15, 0),
            Location: 'Sony',
            Speaker: 'Ulrich Mors'
        },
        {
            id: 5,
            Subject: 'Minne menet, suomalainen AV-ala?',
            StartTime: new Date(2022, 3, 1, 15, 0),
            EndTime: new Date(2022, 3, 1, 16, 0),
            Location: 'Avita ry',
            Speaker: 'Mika Vakkilainen'
        }

    ];
    private eventTemplate(props: { [key: string]: any }): JSX.Element {
        return (<div className="template-wrap">
            <a target='_blank' href={props.url}>{props.Subject}</a>
            {props.Location} </div>)
    }

    public render() {
        return <ScheduleComponent width='100%' height='550px' className=" mt-4" currentView="Day" selectedDate={new Date(2022, 3, 1)}
            eventSettings={{ dataSource: this.LocalData }}>
            <ViewDirective option="Day" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="Week" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="WorkWeek" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="Month" eventTemplate={this.eventTemplate.bind(this)} />
            <Inject services={[Day, Week, Month, WorkWeek, Agenda]}></Inject>
        </ScheduleComponent>
    }
}

export default Calender;
*/