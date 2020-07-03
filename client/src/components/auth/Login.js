import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import mobile from "../../img/mobile.png";

class Login extends Component {
  render() {
    return (
      <div className="margin">    
        <img className="mobile" src={mobile} />
        <div className="d-flex flex-column">
          <div className="card">
            <div className="card-body">
              <img className="logo" src={logo} alt="instagram" />
              <br/>
              <br/>
              <form action="">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"                    
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"                    
                  />
                  <input
                    type="submit"
                    value="Log In"
                    className="button"
                  />
                </div>
              </form>
              <div id="or">
                <hr id="one" />
                <span>OR</span>
                <hr id="two" />
              </div>
              <p className="more-info">
                Don't have an account? &nbsp;
                <span>
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;