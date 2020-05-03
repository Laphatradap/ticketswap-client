import React from "react";
import { connect } from "react-redux";
import EventForm from "./Eventform";
import { createEvent } from "../../actions/events";

class CreateEventContainer extends React.PureComponent {
  componentDidMount = () => {
    const isLoggedIn = this.props.user.token;
    if (!isLoggedIn) {
      this.props.history.push("/login");
    }
  };

  state = {
    name: "",
    description: "",
    imgUrl: "",
    start_date: "",
    end_date: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(
      this.state.name,
      this.state.description,
      this.state.imgUrl,
      this.state.start_date,
      this.state.end_date
    );
    this.props.history.push("/events")
  };

  render() {
    return (
      <div>
        <h1>Create New Event</h1>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { createEvent })(CreateEventContainer);
