import React, { Component } from "react";
import "./navbar.css";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-lg"
        style={{ backgroundColor: "white", padding: "0px" }}
      >
        <div className="container">
         
            <Link className="navbar-brand" to="#">
              <img className="logo-navbar" alt="Instagram" src={logo} />
            </Link>
        
          <div className="search d-none d-xl-block d-lg-block d-md-block">
            <span className="fa fa-search"></span>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search.."
            />
          </div>
          <ul style={{ marginTop: "auto", marginBottom: "auto" }}>
            <li>
              <Link to="#">
                <i className="fa fa-home navbarIcon" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-compass navbarIcon" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-heart-o navbarIcon" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              {/* Conditional rendering of dropdown -- on click to do in react*/}
              <Link to="#">
                <section className="avatar-wrapper">
                  <img
                    className="avatar navbarIcon"
                    src={avatar}
                    alt="Avatar"
                  />
                  <div className="log-toolContainer">
                    <div className="log-popover">
                      <Link to="#">
                        <i
                          className="fa fa-user"
                          aria-hidden="true"
                          style={{ marginRight: "8px" }}
                        ></i>
                        Profile
                      </Link>
                      <Link to="#">
                        <i
                          className="fa fa-bookmark-o"
                          style={{ marginRight: "8px", marginBottom: "1px" }}
                          aria-hidden="true"
                        ></i>
                        Saved
                      </Link>
                      <hr
                        className="lineTopMargin"
                        style={{ marginTop: "1px" }}
                      />
                      <Link to="#" style={{ marginTop: "-15px" }}>
                        Log out
                      </Link>
                    </div>
                  </div>
                </section>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
