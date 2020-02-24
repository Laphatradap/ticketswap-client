import React from "react";
import { Link } from "react-router-dom";

// export default function EventsList (props) {
//   return (props.events.map(event =>
//   <h1>{event.name}</h1>
//     <img src={event.picture} alt={event.name} />
//   <p>{event.description}</p>
//   ))
// }

export default props => (
  <div>
    {props.events.map(event => (
      <div key={event.id}>
        <img src={event.imgUrl} alt={event.name} />
        <h1>{event.name}</h1>
        <p>Description: {event.description}</p>
        <p>Start Date: {event.start_date}</p>
        <p>End Date: {event.end_date}</p>
        <Link to={`/event/${event.id}`}><button>Check tickets</button></Link>
      </div>
    ))}
  </div>
);
