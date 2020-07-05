import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

class Signup extends Component {
  render() {
    return (
      <div className="margin">
        <div className="d-flex flex-column">
          <div className="card">
            <div className="card-body">
              <img className="logo" src={logo} alt="instagram" />
               <p className="info">
                Sign up to see photos and videos                 
                from your friends.
              </p>
              <form action="">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    type="fullname"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullname"
                  />
                  <input
                    type="username"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                  <input
                    type="submit"
                    value="Sign Up"
                    className="button"
                  />
                </div>
              </form>
              <p className="terms">
                By signing up,you agree to our <b>Terms, Data Policy and Cookies Policy.</b>
              </p>
             
              <p className="more-info">
                 Have an Account? &nbsp;
                <span>
                  <Link to="/">Log in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;