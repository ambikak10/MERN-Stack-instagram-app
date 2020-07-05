import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';
import Post from "./components/displayPost/Post";

class App extends Component {
  render() {
   
    return (
      <Router>
        <div className='App'>
          {/* <Navbar /> */}
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/post' component={Post} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
