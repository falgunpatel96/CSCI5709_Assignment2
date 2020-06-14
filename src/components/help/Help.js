import React, { Component } from "react";
import { withRouter } from "react-router";
import "./help.css";

export class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    if (
      this.state.name.trim().length === 0 ||
      this.state.email.trim().length === 0 ||
      this.state.subject.trim().length === 0 ||
      this.state.message.trim().length === 0
    ) {
      alert("All fields are required");
    } else {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.state.email
        )
      ) {
		alert("Query Send Succesfully, We will revert you in 24 hours");
	  } else {
        alert("Please enter an valid Email");
      }
    }
  };
  render() {
    return (
      <div className="container custom-height">
        <form className="well span8" role="form">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group mt-4" >
                <input
                  className="form-control custom-form"
                  name="name"
                  placeholder="Enter Name"
				  type="text"
				  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control custom-form"
                  name="email"
                  placeholder="Enter email address"
				  type="text"
				  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
              <div className="form-group">
                <select className="form-control custom-form" id="subject" name="subject" onChange={(e) => this.handleInputChange(e)}>
				<option selected value="Select subject">
                    Select Subject
                  </option>  
				<option value="general">
                    General Help
                  </option>
                  <option value="suggestions">
                    Suggestions regarding product
                  </option>
                  <option value="product">Product Specific Help</option>
                </select>
              </div>
            </div>
            <div className="col-md-8">
              <label>Message</label>
              <textarea
                className="form-control"
                name="message"
				rows="10"
				placeholder="Enter message here"
				onChange={(e) => this.handleInputChange(e)}
              ></textarea>
              <button onClick={(e) => this.handleSubmit(e)} className="btn-theme pull-right" type="submit" >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Help);
