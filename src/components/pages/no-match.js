import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="no-match">
      <h2>We couldn't find that page</h2>
      <div className="view-projects-button">
        <Link to="/">Return to Homepage</Link>
      </div>
    </div>
  );
}