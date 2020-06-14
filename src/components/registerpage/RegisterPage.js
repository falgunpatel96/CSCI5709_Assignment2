import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      email: '',
      password: '',
      accounttype: ''
    }
  }

  handleInputChange=(e)=>{
    this.setState({
    [ e.target.name]: e.target.value
    })
  }
  
  handleSubmit=(event) =>{
    console.log(this.state);
    if(this.state.email.trim().length === 0 || this.state.name.trim().length === 0 || this.state.password.trim().length === 0 || this.state.accounttype.trim().length === 0){
      alert("please fill the required fields")
    }
    else{
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
      if(this.state.password.length<6){
      alert("Password length need to be more than 6")
    }
      else{alert("Signup Successful")}
    }
    else {
      alert("Please enter an valid Email");
    }
  }
  }
  render() {
    return (
      <div>
        <div className="reg-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 m-auto col-sm-8 col-12">
                <div className="reg-box">
                      <div className="reg-content">
                        <h1>Sign Up </h1>
                        <div className="log-body">
                          <div className="form-group myr-top">
                            <input
                              type="text" name="name" required
                              className="form-control reg-custom"
                              placeholder="Name"
                              onChange={(e) => this.handleInputChange(e)}
                            />
                          </div>
                          <div className="form-group myr-top">
                            <input
                              type="text" name="email" required
                              className="form-control reg-custom"
                              placeholder="Email"
                              onChange={(e) => this.handleInputChange(e)}
                            />
                          </div>
                          <div className="form-group myr-top">
                            <input
                              type="password" name="password" required
                              className="form-control reg-custom"
                              placeholder="Password"
                              onChange={(e) => this.handleInputChange(e)}
                            />
                          </div>
                          <div className="form-group myr-top">
                            <select className="form-control reg-custom" name="accounttype" defaultValue="Select Account Type" onChange={(e) => this.handleInputChange(e)}>
                              <option defaultValue>Select Account Type</option>
                              <option value="Instructor">Instructor</option>
                              <option value="Student">Student</option>
                            </select>
                            <br />
                          </div>
                          <div className="reg-btn text-center">
                            <Link onClick={(e) => this.handleSubmit(e)} className="btn btn-theme">
                              Sign Up
                            </Link>
                          </div>
                          <div className="reg-bottom-content">
                            <p>
                              Already Have Account?<Link to="/">Sign In</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);
