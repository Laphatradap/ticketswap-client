import React from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../../actions/events"
// import { fetchTickets } from "../../actions/tickets"
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchTickets()
    // this.props.fetchEvents()
    this.props.fetchEvent(Number(this.props.match.params.id));
    // this.props.fetchTickets()
    // console.log("props of TicketsListContainer", this.props);
    
  }
  // renderTicket = (event, TicketComponent) => {
  //   return event.map(el => (
  //     <TicketComponent 
  //       key={el.id}
  //       id={el.id}
  //       name={el.sellerName} 
  //     />

  //   ))
  // }
  render() {
    if(!this.props.event) return null;
    // if(!this.props.event.length || !this.props.tickets.length) {
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //     </div>
    //   )

    // }
    return (
      <div>
        <TicketsList event={this.props.event} />
        {/* <TicketsList
          event={
            this.props.event &&
            this.props.match.params.id == this.props.event.id &&
            this.props.event
          }
          // tickets={this.props.tickets}
        /> */}
        {/* {this.renderTicket(this.props.event, TicketsList)} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of TicketListContainer", state.event);
  return {
    event: state.event
  };
};

export default connect(mapStateToProps, { 
  fetchEvent
})(TicketsListContainer);
