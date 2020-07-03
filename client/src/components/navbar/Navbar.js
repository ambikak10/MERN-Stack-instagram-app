import React, { Component } from 'react';
import "./navbar.css";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className='navbar navbar-light navbar-expand-lg'
        style={{ backgroundColor: "white", padding: "0px" }}
      >
        <div className='container'>
          <Link className='navbar-brand' to='#'>
            <img className='logo' alt='Instagram' src={logo} />
          </Link>
          <div className='search' style={{display: "inline-block"}}>
            <span class='fa fa-search d-none d-xl-block'></span>
            <input
              className='d-none d-xl-block form-control   form-control-sm'
              type='search'
              placeholder='Search..'
            />
          </div>
          <ul style={{ marginTop: "auto", marginBottom: "auto" }}>
            <li>
              <Link to='#'>
                <i className='fa fa-home navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='fa fa-compass navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='fa fa-heart-o navbarIcon' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <img className='avatar navbarIcon' src={avatar} alt='Avatar' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
