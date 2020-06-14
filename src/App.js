import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import LandingPage from './components/landingpage/LandingPage'
import RegisterPage from './components/registerpage/RegisterPage'
import StudentDashboard from './components/studentdashboard/StudentDashboard'
import Help from './components/help/Help'
import Footer from './components/footer/Footer'

function App() {
  return (
    <center>
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/registerpage' component={RegisterPage}/>
      <Route exact path='/studentdashboard' component={StudentDashboard}/>
      <Route exact path='/help' component={Help}/>
      </Switch>
    </Router>
    <Footer />
    </center>
  );
}

export default App;
