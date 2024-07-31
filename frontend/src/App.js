// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarEvent from "../src/Components/NavbarEvent";
import EventCreation from "./pages/EventCreation";
import EventListView from "./pages/EventListView";
// import EventCalendarView from "./pages/EventCalenderView";
import EventUpdate from "./pages/EventUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <EventCalendarView /> */}
        <Routes>
          <Route path="/" element={<NavbarEvent />} />
          <Route path="/createEvent" element={<EventCreation />} />
          <Route path="/listAllEvents" element={<EventListView />} />
          <Route path="/updateevent/:id" element={<EventUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
