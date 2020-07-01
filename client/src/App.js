import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
   
    return (
    <Router>
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
    );
  }
}

export default App;
