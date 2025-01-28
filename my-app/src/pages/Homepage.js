import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Homepage!</p>
        <nav>
          <Link to="/accept">Go to Accept</Link> |{" "}
          <Link to="/decline">Go to Decline</Link>
        </nav>
      </header>
    </div>
  );
}

export default Homepage;
