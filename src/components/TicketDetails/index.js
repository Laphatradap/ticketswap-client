import React from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../../actions/tickets"

class TicketDetails extends React.Component {
  componentDidMount() {
    this.props.fetchTicket(Number(this.props.match.params.id))
  }

  render() {
    if (!this.props.ticket) return "Loading..."; 
    if(!this.props.event) return null;
    
    const { sellerName, price} = this.props.ticket
    return (
      <div>
        <h1>Ticket from {sellerName}</h1>
        <p>Price: {price} euro</p>
        <p> Risk: % </p>

        <div>
          <h2>Event Details:
          {this.props.event.map(e => (
            <div key={e.id}>
              <p>{e.name}</p>
              <img src={e.imgUrl} alt={e.name} />
            </div>
          ))}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of TicketDetailContainer", state);
  return {
    ticket: state.tickets,
    event: state.event
  };
};

export default connect(mapStateToProps, { fetchTicket })(TicketDetails);
