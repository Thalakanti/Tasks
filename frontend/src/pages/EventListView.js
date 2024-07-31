import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventListView() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/listAllEvents"
      );
      if (response.status === 200) {
        setEvents(response.data.events);
      } else {
        setError("There was an error in calling the API");
      }
    } catch (err) {
      setError("There was an error in calling the API");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const softDeleteEvent = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/delete/${id}`
      );
      if (response.status === 200) {
        const newEvents = events.filter((event) => event._id !== id);
        setEvents(newEvents);
      } else {
        alert("Some error while trying to delete the event");
      }
    } catch (error) {
      console.log("Error deleting event", error);
    }
  };

  return (
    <div>
      <h1>Event List</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table className="usertable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Edit Event</th>
              <th>Delete Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td>
                  <button>
                    <Link to={`/updateevent/${event._id}`}>UpdateEvent</Link>
                  </button>
                </td>
                <td>
                  <button onClick={() => softDeleteEvent(event._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EventListView;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function EventListView() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/listAllEvents")
//       .then((response) => {
//         setEvents(response.data.events);
//       })
//       .catch((error) => {
//         console.error("error getting EvenList", error);
//       });
//   }, [events]);

//   return (
//     <div>
//       <h1>List of all Events</h1>
//       <ul>
//         {events?.map((event) => (
//           <li key={event._id}>
//             <h2>{event.title}</h2>
//             <p>{event.date}</p>
//             <p>{event.time}</p>
//             <p>{event.location}</p>
//             <p>{event.description}</p>
//             {/* <Link to="/EditEvent/${event._id}">
//               <button>Edit</button>
//             </Link> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EventListView;
