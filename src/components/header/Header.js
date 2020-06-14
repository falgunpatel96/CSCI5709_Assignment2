import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav className="navbar navbar-expand-md secound-head top-nav sticky-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link to='/' className="navbar-brand">
                <strong>QuizRoom</strong>
              </Link>
              <ul className="navbar-nav ml-auto" style={{color:"red"}}>
              <Link to='/' className="nav-link" href="index.html">
                <li className="nav-item">
                    Home <span className="sr-only">(current)</span>
                    </li>
                    </Link>
                    <Link to='/registerpage' className="nav-link" href="shope.html">
                <li className="nav-item">
                    Sign-UP
                    </li>
                    </Link>
                    <Link to='/studentdashboard' className="nav-link" href="blog.html">
                <li className="nav-item">
                    Student Dashboard
                    </li>
                    </Link>
                    <Link to='/help' className="nav-link" href="contact-us.html">
                <li className="nav-item">
                    Help
                    </li>
                    </Link>
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}

export default Header;