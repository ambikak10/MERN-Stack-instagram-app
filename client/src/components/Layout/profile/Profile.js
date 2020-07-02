import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import avatar from "../../img/avatar.png";
import "./profile.css";

export class profile extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div class='container'>
          <div class='margin'>
            <div>
              <Link to=''>
                <img class='profile-photo' alt='profile-photo' src={avatar} />
              </Link>
            </div>
            <div class='d-flex flex-column space'>
              <h2 class='HandleName'>
                HandleName
                <span>
                  <input type='button' class='btn' value='Edit profile' />
                </span>
              </h2>
              <p class='textsize'>
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
              <p class='profileName'>
                <strong>username</strong>
              </p>
            </div>
          </div>
          <hr class='horizontalLine' />

          <div class='margin icons'>
            <Link to=''>
              <i class='fa fa-picture-o' aria-hidden='true'>
                &nbsp; POSTS
              </i>
            </Link>

            <Link to=''>
              <i class='fa fa-bookmark-o' aria-hidden='true'>
                &nbsp; SAVED
              </i>
            </Link>
            <Link to=''>
              <i
                class='fas fa-user-tag'
                style={{fontWeight: "lighter"}}
                aria-hidden='true'
              >
                &nbsp; TAGGED
              </i>
            </Link>
          </div>

          <div class='img-grid'>
            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>

            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>

            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>

            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
            <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
            <Link href='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
            <Link href='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
              <figure>
                <img
                  src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                  alt=''
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
