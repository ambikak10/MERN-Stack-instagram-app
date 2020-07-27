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
import Following from "./components/follow/Following";
import Profiles from "./components/profile/Profiles";
import Home from "./components/home/Home";
import CurrentProfile from "./components/profile/CurrentProfile";
import HandleProfile from "./components/profile/HandleProfile";

//redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";
import { logoutUser } from "./actions/authActions";
import NotFound from "./components/common/NotFound";

//Check for token
if (localStorage.jwtToken) {
  //Set auth header with the token
  setAuthToken(localStorage.jwtToken);
  //Decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //Write user data to redux store
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  });

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href ="/";
  }
}

class App extends Component {
  render() {
   
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={Login} />
            <Route exact path='/current-profile' component={CurrentProfile} />
            <Route exact path='/profile' component={CurrentProfile} />
            <Route exact path='/edit-profile' component={EditProfile} />
            <Route exact path='/post/:id' component={Post} />
            <Route exact path='/profile/:handle/:user_id' component={HandleProfile} />
            <Route exact path='/create-profile' component={CreateProfile} />
            <Route exact path='/create-post' component={CreatePost} />
            <Route exact path='/explore' component={Profiles} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/not-found' component={NotFound} />


            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
