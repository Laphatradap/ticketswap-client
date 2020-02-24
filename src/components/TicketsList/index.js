import React from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../../actions/events";
import TicketsList from "./TicketsList";

class TicketsListContainer extends React.Component {
  componentDidMount() {
    // console.log("props of EventDetailContainer", this.props.fetchOneEvent)
    this.props.fetchEvent(Number(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <TicketsList
          event={
            this.props.event &&
            this.props.match.params.id == this.props.event.id &&
            this.props.event
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state of EventDetailContainer", state)
  return { event: state.event };
};

export default connect(mapStateToProps, {
  fetchEvent
})(TicketsListContainer);
