import React from "react";
import { Link } from "react-router-dom";
// import CreateEventFormContainer from "../CreateEvent"

// export default function EventsList (props) {
//   return (props.events.map(event =>
//   <h1>{event.name}</h1>
//     <img src={event.picture} alt={event.name} />
//   <p>{event.description}</p>
//   ))
// }

export default props => (
  <div>
    <div>
      <Link to="/newEvent"><button>Add new event</button></Link>

      {/* <CreateEventFormContainer /> */}
      <br></br>
    </div>
    <div>
      {props.events.events.map(event => (
        <div key={event.id}>
          <img src={event.imgUrl} alt={event.name} />
          <h1>Event: {event.name}</h1>
          <p>Description: {event.description}</p>
          <p>Start Date: {event.start_date}</p>
          <p>End Date: {event.end_date}</p>
          <Link to={`/events/${event.id}`}>
            <button>Check tickets</button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
