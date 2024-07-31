import React from "react";
import { Link } from "react-router-dom";
function NavbarEvent() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/listAllEvents">AllEvents</Link>
          </li>
          <li>
            <Link to="/createEvent">CreateEvemt</Link>
          </li>
          <li>
            <Link to="/updateevent/:id">UpdateEvent</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarEvent;
