import React, { useState } from 'react';
import { Calendar,momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarEvents = () => {
  // Sample event data
  // eslint-disable-next-line
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Client',
      start: new Date(2024, 8, 20, 10, 0), // year, month (0-based), day, hour, minute
      end: new Date(2024, 8, 20, 12, 0),
      allDay: false,
    },
    {
      title: 'Project Deadline',
      start: new Date(2024, 8, 22, 15, 0),
      end: new Date(2024, 8, 22, 16, 0),
      allDay: false,
    },
    {
      title: 'Team Building Event',
      start: new Date(2024, 8, 25, 9, 0),
      end: new Date(2024, 8, 25, 11, 0),
      allDay: true,
    },
   {
    title: 'Diwali',
    start: new Date(2024, 10, 20, 10, 0), // year, month (0-based), day, hour, minute
      end: new Date(2024, 10, 20, 12, 0),
      allDay: false,
   }
  ]);

  return (
    <div className='calendar-container'>
      <h2>Event Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ 
          height: 500,
          backgroundColor: '#d9f7fc', 
         }}
      />
    </div>
  );
};

export default CalendarEvents;
