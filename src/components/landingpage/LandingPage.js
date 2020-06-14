import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: ''
    }
  }

handleInputChange=(e)=>{
  this.setState({
  [ e.target.name]: e.target.value
  })
}

handleSubmit=(event) =>{
  console.log(this.state);
  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
    if(this.state.password.length<6){
    alert("Password length need to be more than 6")
  }
    else{alert("Login Successful")}
  }
  else {
    alert("Please enter an valid Email");
  }
}

  render() {
    return (
      <div>
        
          <div className="container log-custom-height">
            <div className="row">
              <div className="col-xl-8 m-auto col-sm-8 col-12">
                <div className="log-box">
                  <div className="row">
                    <div className="col-xl-5 col-sm-5 col-12 pad-right-0">
                      <div className="side-box">
                      <h3>Welcome to QuizRoom </h3>
                      <div className="side-section">
                      <label>Start Your Quiz Exprience Here</label>
                    </div></div>
                    </div>
                    <div className="col-xl-7 col-sm-7 col-12 pad-left-0">
                      <div className="log-content">
                        <h1>LOGIN </h1>
                        <div className="log-body">
                          <div className="form-group myr-top">
                            <label>Email</label>
                            <input
                              type="text" name="email"
                              className="form-control custom"
                              placeholder="Email"
                              onChange={(e) => this.handleInputChange(e)}
                            />
                          </div>
                          <div className="form-group myr-top">
                            <label>Password</label>
                            <input
                              type="password" name="password"
                              className="form-control custom"
                              placeholder="Password"
                              onChange={(e) => this.handleInputChange(e)}
                            />
                          </div>
                          <div className="log-btn text-center">
                            <Link onClick={(e) => this.handleSubmit(e)} className="btn btn-theme">
                              Login
                            </Link>
                          </div>
                          <Link>Forgot Password?</Link>
                          <div className="log-bottom-content">
                            <p>
                              New User?<Link to='/registerpage'>Sign Up</Link>
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
        </div>

    );
  }
}

export default withRouter(LandingPage);
