import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import mobile from "../../img/mobile.png";
import Footer from "../../components/footer/Footer";
import axios from 'axios'
import classnames from 'classnames';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",     
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {      
      email: this.state.email,      
      password: this.state.password,
      
    };

    axios
      .post("/api/users/login", newUser)
      .then((res) => console.log(res))
      .catch((err) => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='margin'>
        <img className='mobile' src={mobile} />
        <div className='d-flex flex-column'>
          <div className='card'>
            <div className='card-body'>
              <img className='logo' src={logo} alt='instagram' />
              <br />
              <br />
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  </div>
                <div className="form-group">
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
                </div>
                  <input type='submit' value='Log In' className='button' />                
              </form>
              <div id='or'>
                <hr id='one' />
                <span>OR</span>
                <hr id='two' />
              </div>
              <p className='more-info'>
                Don't have an account? &nbsp;
                <span>
                  <Link to='/signup'>Sign up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Login;
