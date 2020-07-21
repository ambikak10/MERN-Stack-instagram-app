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
import CreateProfile from "./components/profile/CreateProfile";
import CreatePost from "./components/displayPost/CreatePost";
import Followers from "./components/follow/Followers";
import Following from "./components/follow/Following";
import Profiles from "./components/profile/Profiles";
import Home from "./components/home/Home";
//redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
   
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
             <Navbar /> 
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/followers" component={Followers} />
            <Route exact path="/following" component={Following} />
            <Route exact path="/explore" component={Profiles} />
            <Route exact path="/home" component={Home} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
