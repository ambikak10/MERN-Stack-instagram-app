import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
   
    return (
      <Router>
        <div className='App'>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Login} />
          <Route exact path='/profile' component={Profile} />
   
        </div>
      </Router>
    );
  }
}

export default App;
