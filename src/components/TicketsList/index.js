import React from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../../actions/events";
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(Number(this.props.match.params.id));
  }

  renderEvent = (event, Component) => {
    return event.map(e => (
      <Component 
        key={e.id}
        id={e.id}
        name={e.name}
        desc={e.description}
        startDate={e.start_date}
        endDate={e.end_date}
        img={e.imgUrl}
        tickets={e.tickets}
      />
    ))
  }

  render() {
    if (!this.props.event) return null;

    return (
      <div>
        {this.renderEvent(this.props.event, TicketsList)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state of TicketListContainer", state.event);
  return {
    event: state.event
  };
};

export default connect(mapStateToProps, {
  fetchEvent
})(TicketsListContainer);
