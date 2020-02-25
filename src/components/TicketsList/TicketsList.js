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

export default props => (
  <div>
    <div>
      {props.event.map(e => (
        <div key={e.id}>
        <h1>Event: {e.name} </h1>
        <p>Sellers:</p>
        {e.tickets.map(ticket => (
          <div>
          <p>{ticket.sellerName}</p>
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          <img src={ticket.imgUrl} alt={ticket.name} />
          </div>
        ))}
        </div>
      ))}
    </div>
  </div>
)


  // <div>
  //   {props.event.map(entity => (
  //     <div key={entity.id}>
  //       <h1>Event: {entity.name}</h1>
  //       <img src={entity.imgUrl} alt={entity.name} />   

  //       <h2>Sellers:</h2>     
  //       {entity.tickets.map(ticket => (
  //         <p>{ticket.sellerName}</p>
  //         <p>{ticket.price}</p>

  //       ))}
  //   ))}
  // </div>)

    

// function TicketList (props) {
//   console.log("props of TicketList", props.event);
//   // if(!props.event) return "Loading...";
//   return (
//     <div>
//       <h1>{props.event.name}</h1>
//     </div>
//   );
// }
// export default TicketList;

/*
{/* <p>{props.event.tickets}</p> }
      {/* {props.event.tickets.map(ticket => (
        <div key={ticket.id}>
          <p>{ticket.sellerName}</p>
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          <img src={ticket.imgUrl} alt={ticket.description} />
        </div>
      ))} }
      {/* <p>{props.tickets.map(ticket => ticket.sellerName)}</p> }
      {/* {props.tickets.map(ticket => <p>{ticket.sellerName}</p>)} }
*/