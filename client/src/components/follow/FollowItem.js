import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import avatar from '../../img/avatar.png';

class FollowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followStyle: {
        lineHeight: "2px",
        float: "right",
        height: "30px",
        backgroundColor: "#0095f6",
        color: "white"
      },
      followingStyle: {
        lineHeight: "2px",
        float: "right",
        height: "30px",
        backgroundColor: "white",
        border: "1px solid #dbdbdb",
        color: "black"
      }
    };
  }
  render() {
    const {follow, followingList} = this.props;
    let followButton;
    let followButtonStyle;
    if (followingList.indexOf(follow.user) === -1) {
      followButtonStyle = this.state.followStyle;
      followButton = "Follow";
    } else {
      followButtonStyle = this.state.followingStyle;
      followButton = "Following";
    }
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
            <Link to='#'>
              <img
                className='followers-avatar-icon'
                src={follow.avatar}
                alt='Avatar'
              />
            </Link>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-6 col-xxs-6'>
          <Link
            to='#'
            class='fontStyleSizeColor'
            style={{ 
              marginLeft: "-50px", 
            fontSize: "16px" }}
          >
            {follow.handle}
          </Link>
          <div
            style={{
              // marginTop: "-4px",
              marginLeft: "-50px",
              color: "#606060",
            }}
          >
            {follow.name}
          </div>
        </div>

        <div className='spaceMargin col-sm-3 col-md-3 col-lg-3 col-xxs-3'>
          <button
            className='btn'
            style={followButtonStyle}
            // onClick={this.handleClick}
          >
            {followButton}
            {/* {this.state.isToggleOn ? "Follow" : "Following"} */}
          </button>
        </div>
        </div>
        
      </div>
    )
  }
}

export default FollowItem;
