import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";

function Home(props) {
  return (
    <div>
      Welcome to TicketSwap
      <Router>
        <Link to="/signup">
          <p>Sign up!</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default Home;
