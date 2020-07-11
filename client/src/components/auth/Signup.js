import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import axios from 'axios'
import classnames from 'classnames';

class Signup extends Component {
  constructor() {
    super();
    this.state = {      
      email: '',
      fullname: '',
      username: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {      
      email: this.state.email,
      fullname: this.state.fullname,
      username: this.state.username,
      password: this.state.password,      
    };

    axios
      .post('/api/users/signup', newUser)
      .then(res => console.log(res))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {    
    const {errors} = this.state;
    return (
      <div className="margin">        
          <div className="d-flex flex-column">
            <div className="card">
              <div className="card-body">
                <img className="logo" src={logo} alt="instagram" />
                <p className="info">
                  Sign up to see photos and videos from your friends.
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email,
                      })}
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                    <input
                      type="fullname"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.fullname,
                      })}
                      placeholder="Full Name"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.onChange}
                    />
                    {errors.fullname && (
                      <div className="invalid-feedback">{errors.fullname}</div>
                    )}
                    <input
                      type="username"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.username,
                      })}
                      placeholder="Username"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password,
                      })}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                    <input type="submit" value="Sign Up" className="button" />
                  </div>
                </form>
                <p className="terms">
                  By signing up,you agree to our{" "}
                  <b>Terms, Data Policy and Cookies Policy.</b>
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