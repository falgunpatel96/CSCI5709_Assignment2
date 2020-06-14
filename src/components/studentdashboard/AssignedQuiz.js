import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

class AssignedQuiz extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row ml-4 mr-4">
          <div className="col col-sm-3 mt-3 ml-5 mr-5">
            <Card
              style={{ width: "18rem", background: "#D4FACE", height: "10rem" }}
              onClick={() => (window.confirm('Are you sure you wish to Start the Quiz?')) }
            >
              <Card.Body>
                <Card.Title>Quiz-1</Card.Title>
                <Card.Text>Quiz-1 Topic</Card.Text>
                <Card.Text>Click To Start</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-sm-3 mt-3 ml-5 mr-5">
            <Card
              style={{ width: "18rem", background: "#D4FACE", height: "10rem" }}
              onClick={() => (window.confirm('Are you sure you wish to Start the Quiz?')) }
            >
              <Card.Body>
                <Card.Title>Quiz-2</Card.Title>
                <Card.Text>Quiz-2 Topic</Card.Text>
                <Card.Text>Click To Start</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row ml-4 mr-4">
          <div className="col col-sm-3 mt-3 ml-5 mr-5">
            <Card
              style={{ width: "18rem", background: "#D4FACE", height: "10rem" }}
              onClick={() => (window.confirm('Are you sure you wish to Start the Quiz?'))}
            >
              <Card.Body>
                <Card.Title>Quiz-3</Card.Title>
                <Card.Text>Quiz-3 Topic</Card.Text>
                <Card.Text>Click To Start</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-sm-3 mt-3 ml-5 mr-5">
            <Card
              style={{ width: "18rem", background: "#D4FACE", height: "10rem" }}
              onClick={() => (window.confirm('Are you sure you wish to Start the Quiz?'))} 
            >
              <Card.Body>
                <Card.Title>Quiz-4</Card.Title>
                <Card.Text>Quiz-4 Topic</Card.Text>
                <Card.Text>Click To Start</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AssignedQuiz);
