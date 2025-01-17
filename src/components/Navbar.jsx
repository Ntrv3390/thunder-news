import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="/">
            Thunder - News App
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/Ntrv3390"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://linkedin.com/in/mohammed-puthawala"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="navbar navbar-expand-lg navbar-light bg-light mt-5">
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
