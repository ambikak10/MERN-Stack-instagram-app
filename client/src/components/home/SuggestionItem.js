import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import avatar from "../../img/avatar.png"

class SuggestionItem extends Component {
  constructor() {
    super();
    this.state = {
      follow: false,
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    this.setState({ follow: true });
  }

  handleUnfollow() {
    this.setState({ follow: false });
  }
  render() {
    const {profile} = this.props;
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Link to='/profile'>
          <img
            className='rounded-circle profile-card-avatar'
            style={{ width: "50px" }}
            src={profile.user.avatar}
            alt='avatar'
          />
        </Link>
        <span
          style={{
            marginLeft: "10px",
            color: "black",
            fontFamily: "inherit",
            fontWeight: "600",
            textTransform: "lowercase",
          }}
        >
          {profile.handle}
        </span>
        <span style={{ float: "right", marginTop: "10px" }}>
          {!this.state.follow && (
            <Link onClick={this.handleFollow}>Follow</Link>
          )}
          {this.state.follow && (
            <Link onClick={this.handleUnfollow}>Following</Link>
          )}
        </span>
      </div>
    )
  }
}

export default SuggestionItem;
