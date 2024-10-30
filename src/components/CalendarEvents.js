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
          backgroundColor: '#fefefe', // Soft white background for a modern look
          boxShadow: '3px 14px 30px rgba(0, 0, 0, 0.1)', // Softer shadow for depth
          borderRadius: '15px', // More rounded corners for a modern look
          padding: '20px', // Ample padding for content spacing
          border: '1px solid #ddd', // Light grey border for structure
          fontFamily: 'Arial, sans-serif',
          color: '#333', // Standard text color
         }}

         eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.priority === 'high' ? '#ff6b6b' : '#4ecdc4', // Different colors based on event priority
            color: '#fff', // White text on colored backgrounds
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            fontWeight: 'bold',
          },
        })}
      />
    </div>
  );
};

export default CalendarEvents;
