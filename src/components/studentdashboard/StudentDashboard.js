import React, { Component } from "react";
import { withRouter } from "react-router";
import "./StudentDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faLaptop,
  faPoll,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import AssignedQuiz from "./AssignedQuiz";
import QuizResult from "./QuizResult";
import Certificate from "./Certificate";

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customClass: "",
      msg: "",
    };
  }

  itemSelect = (message) => {
    this.setState(
      {
        msg: message,
      },
      () => console.log("After", this.state.msg)
    );
  };

  toggle = () => {
    this.setState({
      customClass: this.state.customClass ? "" : "toggled",
    });
  };
  render() {
    return (
      <div className="container">
        <div class="row">
          <div id="wrapper" className={this.state.customClass}>
            <div id="sidebar-wrapper">
              <ul class="sidebar-nav" style={{ marginLeft: "0" }}>
                <li class="sidebar-brand">
                  <a
                    onClick={this.toggle}
                    id="menu-toggle"
                    style={{ float: "right" }}
                  >
                    <i
                      className="fa fa-bars "
                      style={{ fontSize: "20px" }}
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <button
                    className="button-style"
                    onClick={() => this.itemSelect("assignedquiz")}
                  >
                    <FontAwesomeIcon icon={faLaptop} />
                    <span style={{ marginLeft: "10px" }}>Assigned Quiz</span>
                  </button>
                </li>
                <li>
                  <button
                    className="button-style"
                    onClick={() => this.itemSelect("quizresult")}
                  >
                    <FontAwesomeIcon icon={faPoll} />
                    <span style={{ marginLeft: "10px" }}>Quiz Result</span>{" "}
                  </button>
                </li>
                <li>
                  <button
                    className="button-style"
                    onClick={() => this.itemSelect("certificate")}
                  >
                    <FontAwesomeIcon icon={faFileAlt} aria-hidden="true" />
                    <span style={{ marginLeft: "10px" }}>
                      Generate Certificate
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="page-content-wrapper" className="page-content-wrapper">
            {this.state.msg === "assignedquiz" ? (
              <AssignedQuiz />
            ) : this.state.msg === "quizresult" ? (
              <QuizResult />
            ) : this.state.msg === "certificate" ? (
              <Certificate />
            ) : (
              <h3>Welcome to Student Dashboard</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(StudentDashboard);
