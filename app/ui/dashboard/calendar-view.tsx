'use client';

import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const events = [
  { date: '2024-03-15', title: 'Meeting with Client' },
  { date: '2024-03-16', title: 'Team Lunch' },
  // Add more events as needed
];

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
        <h2 className="text-2xl font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {daysInMonth.map(day => (
          <div key={day.toString()} className="border p-2 h-24 overflow-y-auto">
            <div className="text-right">{format(day, 'd')}</div>
            {events
              .filter(event => event.date === format(day, 'yyyy-MM-dd'))
              .map((event, index) => (
                <div key={index} className="text-sm bg-blue-100 p-1 mt-1 rounded">
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}