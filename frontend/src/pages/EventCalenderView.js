// const currentTimestamp = new Date();
// pm.environment.set("current_timestamp", currentTimestamp.toISOString());
// EventCalendar.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// Example events (replace with your actual events)
const events = [
  {
    title: "Meeting",
    start: new Date(),
    end: new Date(),
  },
  // Add more events here
];

function EventCalendar() {
  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // Other props and customization options
      />
    </div>
  );
}

export default EventCalendar;
