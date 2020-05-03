import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Pagination from "react-js-pagination"
// require("bootstrap/less/bootstrap.less")
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EventsListContainer from "./components/EventsList";
import TicketsListContainer from "./components/TicketsList";
import TicketDetails from "./components/TicketDetails";
import CreateEventContainer from "./components/CreateEvent";

import { connect } from "react-redux";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activePage: 9
  //   };
  // }

  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({activePage: pageNumber});
  // }

  protectedRoutes = (Component, routerProps) => {
    const { token } = this.props;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/events" component={EventsListContainer} />
          <Route exact path="/newEvent" 
          render={props => this.protectedRoutes(CreateEventContainer, props)} />
          <Route exact path="/events/:id" component={TicketsListContainer} />
          <Route exact path="/tickets/:id" component={TicketDetails} />
        </Router>
        <div>
          {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          totalItemsCount={500}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        /> */}
        </div>
      </div>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    token: state.user.token
  };
};

export default connect(mapStateToProps)(App);
