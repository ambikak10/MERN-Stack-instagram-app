import React, { Component } from 'react';
import avatar from '../../img/avatar.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../actions/profileActions";

class ProfileCard extends Component {
  constructor() {
    super();
    this.state = {
      follow: false,
    };
  }

  handleFollow(profileId) {
    this.setState({ follow: true });
    this.props.followUser(profileId);
  }

  handleUnfollow(profileId) {
    this.setState({ follow: false });
    this.props.unfollowUser(profileId);
  }
  render() {
    const { profile } = this.props;
    return (
      <div className='d-flex card profile-card-outer'>
        <div style={{ marginTop: "10px" }}>
          <Link to={`/profile/${profile.handle}/${profile.user._id}`}>
            <img
              className='rounded-circle profile-card-avatar'
              src={profile.user.avatar}
              alt='avatar'
            />
          </Link>
        </div>
        <div className='profile-card-truncate-text'>{profile.user.name}</div>
        <div className='profile-card-card-footer'>
          {!this.state.follow && (
            <button
              className='btn profile-card-button-follow'
              onClick={this.handleFollow.bind(this, profile._id)}
            >
              Follow
            </button>
          )}
          {this.state.follow && (
            <button
              className='btn profile-card-button-unfollow'
              onClick={this.handleUnfollow.bind(this, profile._id)}
            >
              Following
            </button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { followUser, unfollowUser})(ProfileCard);

