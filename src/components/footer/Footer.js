import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="footer">
            <div className="footer-section">
              <label>CSCI 5709: Advanced Web Services </label>
              <label>Copyrights © QuizRoom all right reserve</label>
            </div>
        </div>
        );
    }
}

export default Footer;