import React, { Component } from 'react';
import "./navbar.css";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className='navbar navbar-light bg-light navbar-expand-lg'>
            <div className='container'>
              <Link className='navbar-brand'to='#'>
                <img
                  className='logo'
                  alt='Instagram'
                  src={logo}
                />
              </Link>
              <input
                className='fad fa-search search d-none d-xl-block form-control   form-control-sm'
                type='search'
                placeholder='Search..'
              />
              <ul>
                <li>
                  <Link to='#'>
                    <i className='fa fa-home' aria-hidden='true'></i>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <i className='fa fa-compass' aria-hidden='true'></i>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <i className='fa fa-heart-o' aria-hidden='true'></i>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <img
                      className='avatar'
                      src={avatar}
                      alt='Avatar'
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default navbar;
