import React, { Component } from "react";
import "./follow.css";

import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";

class following extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //    seen: true
  //   };
  // }
  seen = true;
  close = () => {
   this.seen = false;
  }
  render() {
    if (!this.props.showFollowing && !this.seen) {
      return null;
    }
    return (
      <div className='first'>
        <div className='second'>
          <div className='third'>
            <div className='followers-container'>
              <h5>Following </h5>
              <span>
                <Link onClick={this.close()} className='X'>
                  X
                </Link>
              </span>
              <hr />

              <div className='container scrolling'>
                <div
                  className='row'
                  // style={{position: "relative"}}
                >
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px", fontSize: "16px" }}
                    >
                      HandleName
                    </Link>
                    <div
                      style={{
                        marginTop: "-4px",
                        marginLeft: "-50px",
                        color: "#606060",
                      }}
                    >
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px", fontSize: "16px" }}
                    >
                      HandleName
                    </Link>
                    <div
                      style={{
                        marginTop: "-4px",
                        marginLeft: "-50px",
                        color: "#606060",
                      }}
                    >
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <Link to='#'>
                      <img
                        className='followers-avatar-icon'
                        src={avatar}
                        alt='Avatar'
                      />
                    </Link>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
                    <Link
                      to='#'
                      className='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>
                  <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn'
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgb(218, 215, 215)",
                        lineHeight: "2.2px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Following
                    </button>
                  </div>
                </div>
              </div>
              {/* followers-container ends */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default following;

