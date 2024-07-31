import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function EventCreation() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const EventSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createEvent",
        event
      );
      if (response.status === 200) {
        setEvent(response.data.data);
      } else {
        alert("There was an error in calling the API");
      }
    } catch (err) {}
  };
  // useEffect(() => {
  //   EventSubmit();
  // });

  return (
    <div>
      <h2>EventCreation</h2>
      <br />
      <br />
      <form onSubmit={EventSubmit}>
        <label htmlFor="">Title</label>{" "}
        <input
          type="text"
          placeholder="Event Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          placeholder="Event Date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <label htmlFor="">Time</label>
        <input
          type="time"
          placeholder="Event Time"
          value={event.time}
          onChange={(e) => setEvent({ ...event, time: e.target.value })}
        />
        <label htmlFor="">Location</label>
        <input
          type="text"
          placeholder="Event Location"
          value={event.location}
          onChange={(e) => setEvent({ ...event, location: e.target.value })}
        />
        <label htmlFor="">Description</label>
        <input
          type="text-area"
          placeholder=" Event Description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventCreation;
