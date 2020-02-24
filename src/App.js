import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
import Signup from "./components/Signup";
import Login from "./components/Login"
// import Home from "./components/Home"
import EventsListContainer from "./components/EventsList/index"
import EventDetailsContainer from "./components/TicketsList/index"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/signup">
            <p>Sign up!</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </nav>
        <Route exact path="/" component={EventsListContainer} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event/:id" component={EventDetailsContainer} />
      </Router>
    </div>
  );
}

export default App;
