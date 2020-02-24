import React from "react";

function TicketList (props) {
  if (!props.event) return "Loading...";
  return (
    <div>
      <h1>{props.event.name}</h1>
    </div>
  );
}
export default TicketList;
