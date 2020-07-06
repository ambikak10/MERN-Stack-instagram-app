import React, { Component } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";

class post extends Component {
  render() {
    return (
     
        <div className="parent">
          <div className="child">
            <span class="close">
              <button>
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </span>
            <div className="container-post">
              <img
                className="size-of-image"
                // width="600"
                // height="600"
                src="https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
              />

              <div className="style d-none d-xl-block">
                <Link to="#">
                  <img className="avatar-icon" src={avatar} alt="Avatar" />
                </Link>
                <Link to="" className="name-of-account">
                  HandleName
                </Link>
                <hr style={{ marginBottom: "10px" }} />

                {/*  post description & comments on post */}
                <div className="comment-wrapper">
                  <section className="row">
                    {/* <!-- post description start--> */}

                    <div class="col-lg-2">
                      <Link to="#">
                        <img class="avatar-icon" src={avatar} alt="Avatar" />
                      </Link>
                    </div>
                    <div class="col-lg-10">
                      <div id="col-space">
                        <Link class="handlename-post" to="">
                          HandleName
                        </Link>
                        <span class="textStyle-comment">
                          &nbsp; Post description
                        </span>
                      </div>
                    </div>
                    {/* <!-- post description end--> */}

                    {/* comments on post */}
                    <div className="col-lg-2">
                      <Link to="#">
                        <img
                          className="avatar-icon"
                          src={avatar}
                          alt="Avatar"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-8">
                      <div id="col-space">
                        <Link to="" className="handlename-post">
                          user1
                        </Link>
                        <span className="textStyle-comment">
                          &nbsp; Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit es
                        </span>
                      </div>
                    </div>
                    {/* <!--delete my comment-rendered conditionally in react--> */}
                    <div className="col-lg-2">
                      <Link to="" className="delete-post">
                        <i
                          style={{
                            fontSize: "0.9em",
                            float: "right",
                            padding: "5px",
                            marginTop: "-3px",
                            fontWeight: "lighter",
                          }}
                          className="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>

                    <div className="col-lg-2">
                      <Link to="#">
                        <img
                          className="avatar-icon"
                          src={avatar}
                          alt="Avatar"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-10">
                      <div id="col-space">
                        <Link to="" className="handlename-post">
                          user2
                        </Link>
                        <span className="textStyle-comment">
                          &nbsp; Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit es
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <Link to="#">
                        <img
                          className="avatar-icon"
                          src={avatar}
                          alt="Avatar"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-10">
                      <div id="col-space">
                        <Link to="" className="handlename-post">
                          user3
                        </Link>
                        <span className="textStyle-comment">
                          &nbsp; Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit es
                        </span>
                      </div>
                    </div>
                  </section>
                </div>

                <div id="footer">
                  <hr />
                  <section>
                    <Link to="" class="delete-post">
                      <i
                        className="fa fa-heart-o"
                        style={{ fontSize: "1.5em" }}
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <Link to="" class="delete-post">
                      <i
                        style={{ fontSize: "1.5em" }}
                        className="fa fa-comment-o"
                        aria-hidden="true"
                      ></i>
                    </Link>

                    <Link to="" class="delete-post">
                      <i
                        style={{ fontSize: "1.5em" }}
                        className="far fa-user-circle"
                        aria-hidden="true"
                      ></i>
                    </Link>

                    {/* delete post */}
                    <Link to="" className="delete-post">
                      <i
                        style={{
                          fontSize: "1.5em",
                          float: "right",
                          padding: "5px",
                          marginTop: "-3px",
                          fontWeight: "lighter",
                        }}
                        className="fa fa-trash"
                        aria-hidden="true"
                      ></i>
                    </Link>

                    <p className="textStyle-date">
                      MARCH 24 &nbsp; <span>21 Likes</span>
                    </p>
                  </section>
                  <hr />
                  <textarea
                    className="comment-textarea"
                    type="text"
                    placeholder='Add a comment..'
                  ></textarea>
                  <button className='post'>Post</button>
                </div>
              </div>
            </div>

            {/* section only for mobiles - to be rendered conditionally*/}

            <div id='wrapper'>
              <section className='section-only-mobile d-xl-none'>
                <Link to='' class='delete-post'>
                  <i
                    style={{ fontSize: "1.5em" }}
                    className='fa fa-heart-o'
                    aria-hidden='true'
                  ></i>
                </Link>
                <Link to='' class='delete-post'>
                  <i
                    style={{ fontSize: "1.5em" }}
                    className='fa fa-comment-o'
                    aria-hidden='true'
                  ></i>
                </Link>

                <Link to='' class='delete-post'>
                  <i
                    style={{ fontSize: "1.5em" }}
                    className='far fa-user-circle'
                    aria-hidden='true'
                  ></i>
                </Link>

                {/* delete post */}
                <Link to='' className='delete-post'>
                  <i
                    style={{
                      fontSize: "1.5em",
                      padding: "5px",
                      marginTop: "-3px",
                      fontWeight: "lighter",
                    }}
                    className='fa fa-trash'
                    aria-hidden='true'
                  ></i>
                </Link>

                <p className='textStyle-date'>
                  MARCH 24 &nbsp; <span>21 Likes</span>
                </p>
                <textarea
                  className='comment-textarea'
                  type='text'
                  placeholder='Add a comment..'
                ></textarea>
                <button className='post'>Post</button>
              </section>
            </div>
          </div>
        </div>
     
    );
  }
}

export default post;
