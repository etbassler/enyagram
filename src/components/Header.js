import React from "react";

const Header = () => (
  <div id="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <h1>The Enyagram</h1>
      </a>
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
            <a className="nav-link" href="/About">
              About the Enyagram
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quiz">
              The Quiz
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
