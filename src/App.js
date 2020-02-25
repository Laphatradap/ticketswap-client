import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/index"
import EventsListContainer from "./components/EventsList"
import TicketsListContainer from "./components/TicketsList"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={EventsListContainer} />
        <Route exact path="/events/:id" component={TicketsListContainer} />
      </Router>
    </div>
  );
}

export default App;
