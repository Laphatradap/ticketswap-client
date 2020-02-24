import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Home from "./components/Home"
import EventsListContainer from "./components/EventsList/index"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/signup">
            <p>Sign up!</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/event">
            <p>Event</p>
          </Link>

        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event" component={EventsListContainer} />
      </Router>
    </div>
  );
}

export default App;
