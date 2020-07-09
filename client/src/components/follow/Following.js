import React, { Component } from "react";
import "./follow.css";

import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";

class following extends Component {
  render() {
    return (
      <div className='first'>
        <div className='second'>
          <div className='third'>
            <div className='followers-container'>
              <h5>Followers </h5>
              <span>
                <Link to='/profile' class='X'>
                  X
                </Link>
              </span>
              <hr />

              <div className='container'>
                <div
                  className='row'
                  // style={{ marginBottom: "10px" }}
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
                      class='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>

                  <div className='col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn btn-primary'
                      style={{
                        // position: "absolute",
                        // right: "0",
                        // marginRight: "10px",
                        // height: "35px",
                        lineHeight: "2px",
                        // marginTop: "0px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Follow
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
                      class='fontStyleSizeColor'
                      style={{ marginLeft: "-50px" }}
                    >
                      HandleName
                    </Link>
                    <div style={{ marginTop: "-4px", marginLeft: "-50px" }}>
                      Name
                    </div>
                  </div>

                  <div className='col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
                    <button
                      className='btn btn-primary'
                      style={{
                        // position: "absolute",
                        // right: "0",
                        // marginRight: "10px",
                        // height: "35px",
                        lineHeight: "2px",
                        // marginTop: "0px",
                        float: "right",
                        height: "30px",
                      }}
                    >
                      Follow
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

