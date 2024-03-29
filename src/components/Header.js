import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div id="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
        <h1>The Enyagram</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>
              About the Enyagram
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/quiz"}>
              The Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
