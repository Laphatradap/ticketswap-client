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
    this.props.createEvent(this.state); //MapDispatchToProps no need to use dispatch
    // event.target.reset() 
  };

  render() {
    return (
      <div>
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