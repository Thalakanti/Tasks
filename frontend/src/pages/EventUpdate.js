import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditUpdate() {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();

  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getEvent/${eventId}`
      );
      setEvent(response.data.events);
    } catch (error) {
      console.log("Error fetching event", error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, date, time, location, description } = e.target.elements;

    const updatedData = {
      title: title.value,
      date: date.value,
      time: time.value,
      location: location.value,
      description: description.value,
    };

    try {
      await axios.put(
        `http://localhost:5000/api/updateEvent/${eventId}`,
        updatedData
      );
      console.log("Event updated successfully!");
    } catch (error) {
      console.log("Error updating event", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={event.title}
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        defaultValue={event.date}
      />
      <input
        type="time"
        name="time"
        placeholder="Time"
        defaultValue={event.time}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        defaultValue={event.location}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        defaultValue={event.description}
      />
      <button type="submit">Update Event</button>
    </form>
  );
}

export default EditUpdate;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function EventUpdate() {
//   const [event, setEvent] = useState({});
//   const [eventId, setEventId] = useState(""); // Replace with actual event ID
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");

//   const updateEvent = async (eventId, newData) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/updateEvent/${eventId}`,
//         newData
//       );
//       setEvent(response.data.data);
//       console.log("Event updated successfully:", response.data.data);
//     } catch (error) {
//       console.log("Error updating event", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch event data from API and set the state
//     axios
//       .get(`http://localhost:5000/api/getEvent/${eventId}`)
//       .then((response) => {
//         setEvent(response.data.data);
//         setTitle(response.data.data.title);
//         setDate(response.data.data.date);
//         setTime(response.data.data.time);
//         setLocation(response.data.data.location);
//         setDescription(response.data.data.description);
//       })
//       .catch((error) => {
//         console.log("Error fetching event data", error);
//       });
//     setEventId(eventId);
//   }, [eventId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newData = {
//       title,
//       date,
//       time,
//       location,
//       description,
//     };

//     updateEvent(eventId, newData);
//   };

//   const handleInputChange = (e) => {
//     switch (e.target.name) {
//       case "title":
//         setTitle(e.target.value);
//         break;
//       case "date":
//         setDate(e.target.value);
//         break;
//       case "time":
//         setTime(e.target.value);
//         break;
//       case "location":
//         setLocation(e.target.value);
//         break;
//       case "description":
//         setDescription(e.target.value);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         value={eventId.title}
//         onChange={handleInputChange}
//         placeholder="Event Title"
//       />
//       <input
//         type="date"
//         name="date"
//         value={eventId.date}
//         onChange={handleInputChange}
//         placeholder="Date"
//       />
//       <input
//         type="time"
//         name="time"
//         value={eventId.time}
//         onChange={handleInputChange}
//         placeholder="Time"
//       />
//       <input
//         type="text"
//         name="location"
//         value={eventId.location}
//         onChange={handleInputChange}
//         placeholder="Location"
//       />
//       <input
//         type="text"
//         name="description"
//         value={eventId.description}
//         onChange={handleInputChange}
//         placeholder="Description"
//       />
//       <button type="submit">Update Event</button>
//     </form>
//   );
// }

// export default EventUpdate;
