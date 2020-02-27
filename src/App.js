import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Pagination from "react-js-pagination"
// require("bootstrap/less/bootstrap.less")
import Home from "./components/Home"
import EventsListContainer from "./components/EventsList"
import TicketsListContainer from "./components/TicketsList"
import TicketDetails from "./components/TicketDetails";

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
 

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={EventsListContainer} />
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

export default App;
