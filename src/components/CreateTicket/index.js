import React from "react";
import { connect } from "react-redux";
import TicketForm from "./TicketForm";
import { createTicket } from "../../actions/tickets";

class CreateTicketContainer extends React.PureComponent {
  state = {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      title: "",
      description: "",
      price: "",
      imgUrl: ""
    });
    this.props.createTicket(this.state); 
  };

  render() {
    return (
      <div>
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { createTicket })(CreateTicketContainer);