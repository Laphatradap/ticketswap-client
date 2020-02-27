import React from "react";
import { connect } from "react-redux";
import EventForm from "./Eventform";
import { createEvent } from "../../actions/events";

class CreateEventContainer extends React.PureComponent {
  // componentDidMount() {
  //   this.props.dispatch(createEvent())
  // }
  // state = {
  //   name: "",
  //   start_date: "",
  //   end_date: "",
  //   description: "",
  //   imgUrl: ""
  // };
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
        {!this.props.userLoggedIn ? (
          <h2>Please log in first</h2>
        ) : (
          <div>
            <h1>Create New Event</h1>
            <EventForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.props}
            />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { userLoggedIn: state.user.token !== null };
};

export default connect(mapStateToProps, { createEvent })(CreateEventContainer);
