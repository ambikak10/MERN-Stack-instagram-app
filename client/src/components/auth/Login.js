import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import mobile from "../../img/mobile.png";
import Footer from "../../components/footer/Footer";


class Login extends Component {
  render() {
    return (
      <div className='margin'>
        <img
          className='mobile d-none d-xl-block d-lg-block d-md-block'
          src={mobile}
        />
        <div className='d-flex flex-column'>
          <div className='card' id='loginCard'>
            <div className='card-body' id='loginCardBody'>
              <img className='logo' src={logo} alt='instagram' />
              <br />
              <br />
              <form action=''>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='loginFormControl'
                    placeholder='Email'
                    name='email'
                  />
                  <input
                    type='password'
                    className='form-control'
                    id='loginFormControl'
                    placeholder='Password'
                    name='password'
                  />
                  <input type='submit' value='Log In' className='button' />
                </div>
              </form>
              <div id='or'>
                <hr id='one' />
                <span style={{margin: "10px"}}>OR</span>
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