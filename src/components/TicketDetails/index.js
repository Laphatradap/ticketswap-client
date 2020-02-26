import React from "react";
import { connect } from "react-redux";
// import { fetchTicket } from "../../actions/tickets"
import { fetchTicket } from "../../actions/tickets";

class TicketDetails extends React.Component {
  componentDidMount() {
    this.props.fetchTicket(Number(this.props.match.params.id));
  }

  render() {
    if (!this.props.ticket || !this.props.event) return "Loading...";
    const { ticket, riskScore } = this.props.ticket;
    return (
      <div>
        <h1>Ticket from: {ticket.user.name} </h1>
        <h2>Price: €{ticket.price}</h2>
        <h3> We calculated that the risk of this ticket being fraudulent is: {riskScore}%</h3>

        <div>
          <p>
            Event Details:
            {this.props.event.map(e => (
              <div key={e.id}>
                <p>{e.name}</p>
                <p>{e.description}</p>
                <img src={e.imgUrl} alt={e.name} />
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of TicketDetailContainer", state.tickets);
  return {
    ticket: state.tickets,
    event: state.event
  };
};

// export default connect(mapStateToProps, { fetchTicket })(TicketDetails);
export default connect(mapStateToProps, { fetchTicket })(TicketDetails);
