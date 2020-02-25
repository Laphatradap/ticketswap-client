import React from "react";

// export default props => (
//   if(!props.event) return "Loading.."
//   <div>
//     <h1>{props.event.name}</h1>
//     {props.tickets.map(ticket => (
//       <div key={ticket.id}>
//         <h2>{ticket.price}</h2>
//       </div>
//     ))}
//   </div>
  
// )

function TicketList (props) {
  console.log("props of TicketList", props);

  if (!props.event || !props.tickets) return "Loading...";
  return (
    <div>
      <h1>{props.event.name}</h1>
      {props.tickets.map(ticket => (
        <div key={ticket.id}>
          <p>{ticket.sellerName}</p>
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          <img src={ticket.imgUrl} alt={ticket.description} />
        </div>
      ))}
      {/* <p>{props.tickets.map(ticket => ticket.sellerName)}</p> */}
      {/* {props.tickets.map(ticket => <p>{ticket.sellerName}</p>)} */}
    </div>
  );
}
export default TicketList;
