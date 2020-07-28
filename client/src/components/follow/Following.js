import React, { Component } from "react";
import "./follow.css";

import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";
import FollowItem from "./FollowItem";

class following extends Component {
 
  render() {
    if (!this.props.showFollowing && !this.seen) {
      return null;
    }
    const {following} = this.props;
    const followingList= following.map(profile => profile.user);
     let content;
     if (following.length > 0) {
       content = following.map(following => (
          <FollowItem key={following.id} follow={following} followingList={followingList}/>
       ))
     }
    return (
      <div className='first'>
        <div className='second'>
          <div className='third'>
            <div className='followers-container'>
              <h5>Following </h5>
              <span>
                <Link onClick={this.props.close} className='X'>
                  X
                </Link>
              </span>
              <hr />

              <div className='container scrolling'>
                <div
                  className='row'
                  // style={{position: "relative"}}
                >
                  {content}
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

