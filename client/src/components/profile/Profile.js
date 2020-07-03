import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import avatar from "../../img/avatar.png";
import "./profile.css";

export class profile extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}

        <div className='container'>
          <div className='margin'>
            <div>
              <Link to=''>
                <img
                  className='profile-photo'
                  alt='profile-photo'
                  src={avatar}
                />
              </Link>
            </div>
            <div className='d-flex flex-column space'>
              <h2 className='HandleName'>
                HandleName
                <span>
                  <input
                    type='button'
                    className='btn profileButton'
                    value='Edit profile'
                  />
                </span>
              </h2>
              <p className='textsize'>
                <span>
                  <Link to='#'>
                    <b>2</b> posts
                  </Link>
                  &nbsp; &nbsp; &nbsp;&nbsp;
                  <Link to='#'>
                    <b>200</b> followers
                  </Link>
                  &nbsp; &nbsp; &nbsp;
                  <Link to='#'>
                    <b>20</b> following
                  </Link>
                </span>
              </p>
              <p className='profileName'>
                <strong>username</strong>
              </p>
            </div>
          </div>
          <hr className='horizontalLine' />

          <div className='profileTabs icons'>
            <Link to=''>
              <i className='fa fa-picture-o' aria-hidden='true'>
                <span style={{ marginLeft: "5px", fontFamily: "sans-serif" }}>
                  POSTS
                </span>
              </i>
            </Link>

            <Link to=''>
              <i className='fa fa-bookmark-o' aria-hidden='true'>
                <span style={{ marginLeft: "5px", fontFamily: "sans-serif" }}>
                  SAVED
                </span>
              </i>
            </Link>
            <Link to=''>
              <i className='far fa-user-circle' aria-hidden='true'>
                <span style={{ marginLeft: "5px", fontFamily: "sans-serif" }}>
                  TAGGED
                </span>
              </i>
            </Link>
          </div>

          <section className='row hover-effect'>
            <div class='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>

            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div>
            </section>
          </div>
        </div>
      
    );
  }
}

export default profile;
