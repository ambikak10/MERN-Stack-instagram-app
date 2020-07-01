import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import mobile from "../../img/mobile.png";


class Login extends Component {
  render() {
    return (
      <div class='margin'>
        <div className='d-none d-xl-block'>
          <img className='mobile' src={mobile} />
        </div>
        <div class='card'>
          <div class='card-body'>
            <img src={logo} alt='instagram' />
            <form action=''>
              <div class='form-group'>
                <input
                  type='email'
                  class='form-control'
                  placeholder='Email Address'
                  name='email'
                />
                <input
                  type='password'
                  class='form-control'
                  placeholder='Password'
                  name='email'
                />
                <input
                  type='submit'
                  value='Log In'
                  class='btn btn-primary btn-block mt-4'
                />
              </div>
            </form>
            <div id='or'>
              <hr id='one' />
              <span>OR</span>
              <hr id='two' />
            </div>
            <p>
              Don't have an account? &nbsp;
              <span>
                <Link to='/signup'>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;