import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions/events";
import EventsList from "./EventsList";

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (!this.props.events) return null;
    return (
      <div>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state of eventsListContainer", state);
  return {events: state.events};
};

// const mapStateToProps = state => ({
//   events: state.events //state of eventsReducers
// })

export default connect(mapStateToProps, { fetchEvents })(EventsListContainer);
