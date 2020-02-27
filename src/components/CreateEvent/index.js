import React from "react";
import { connect } from "react-redux";
import EventForm from "./Eventform";
import { createEvent } from "../../actions/events";

class CreateEventContainer extends React.PureComponent {
  state = {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      name: "",
      start_date: "",
      end_date: "",
      description: "",
      imgUrl: ""
    });
    this.props.createEvent(this.state); 
  };

  render() {
    return (
      <div>
        <h1>Create New Event</h1>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { createEvent })(CreateEventContainer);