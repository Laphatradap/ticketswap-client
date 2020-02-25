import React from "react";
import { connect } from "react-redux";
// import { fetchTickets } from "../../actions/tickets";
import { fetchEvent, fetchEvents } from "../../actions/events"
// import { fetchTickets } from "../../actions/tickets"
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    console.log("props of TicketsListContainer", this.props);
    // this.props.fetchTickets()
    this.props.fetchEvents()
    this.props.fetchEvent(Number(this.props.match.params.id));
    // this.props.fetchTickets()
  }

  // renderTicket = (tickets, TicketComponent) => {
  //   return tickets.map(ticket => (
  //     <TicketComponent 
  //       key={ticket.id}
  //       id={ticket.id}
  //       name={ticket.sellerName} 
  //     />

  //   ))
  // }
  render() {
    // if(!this.props.event.length || !this.props.tickets.length) {
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //     </div>
    //   )

    // }
    return (
      <div>
        <TicketsList
          event={
            this.props.event &&
            this.props.match.params.id == this.props.event.id &&
            this.props.event
          }
          tickets={this.props.tickets}
        />
        {/* {this.renderTicket(this.props.tickets, TicketsList)} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of TicketListContainer", state);
  return {
    tickets: state.events.tickets,
    event: state.event
    // tickets: state.tickets
  };
};

export default connect(mapStateToProps, { 
  fetchEvents,
  fetchEvent
})(TicketsListContainer);
