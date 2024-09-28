'use client';

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for the calendar
const localizer = momentLocalizer(moment);

// Sample events data
const events = [
  {
    title: 'Meeting with Client',
    start: new Date(2023, 5, 15, 10, 0),
    end: new Date(2023, 5, 15, 11, 0),
  },
  {
    title: 'Team Lunch',
    start: new Date(2023, 5, 16, 12, 0),
    end: new Date(2023, 5, 16, 13, 0),
  },
  // Add more events as needed
];

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="h-[600px] w-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        onNavigate={(date) => setSelectedDate(date)}
        date={selectedDate}
      />
    </div>
  );
}