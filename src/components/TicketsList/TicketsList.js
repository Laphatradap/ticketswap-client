import React from "react";
import { Link } from "react-router-dom";
// import TicketDetails from "./TicketDetails";

export default function TicketsList(props) {
  return (
    <div>
      <h1>Event: {props.name} </h1>
      {/* <TicketDetails ticketInfo={props.tickets}/> */}
      {props.tickets.map(ticket => (
        <div key={ticket.id}>
          <p>Seller: {ticket.sellerName}</p>
          <p>Price: {ticket.price} euro </p>
          <img src={ticket.imgUrl} alt={ticket.name} />
          {/* <TicketDetails
            name={ticket.sellerName}
            price={ticket.price}
            description={ticket.description}
            img={ticket.imgUrl}
          /> */}
          <Link to={`/tickets/${ticket.id}`}>
            <button>Check this ticket details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

// export default props => (
//   <div>
//     <div>
//       {props.event.map(e => (
//         <div key={e.id}>
//           <h1>Event: {e.name} </h1>
//           <TicketDetails ticket={e.tickets} />
//           <p>Sellers:</p>
//           {e.tickets.map(ticket => (
//             <div>
//               <p>{ticket.sellerName}</p>
//               <p>{ticket.price}</p>
//               <p>{ticket.description}</p>
//               <img src={ticket.imgUrl} alt={ticket.name} />
//               <Link to={`/tickets/${ticket.id}`}>
//                 <button>Check this ticket details</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );
