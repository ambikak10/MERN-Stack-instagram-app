import React, { Component, Fragment } from 'react';
import Profile from './Profile';
import { getCurrentProfile } from "../../actions/profileActions";
import { getUserPosts } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from '../common/Spinner';

class CurrentProfile extends Component {

 componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getUserPosts();
  }
  render() {
    console.log(this.props.profile.profile);
    const {profile, loading } = this.props.profile;
    let content;
        const { userPosts, loadingPost } = this.props.post;
        console.log(userPosts)
          if (loading || loadingPost || profile === null || userPosts === null) {
            content = ( <Spinner /> )
          } else {
            content = (
              <div>
                <Profile
                  profile={profile}
                  loading={loading}
                  userPosts={userPosts}
                  loadingPost={loadingPost}
                  isCurrentProfile={true}
                />
              </div>
            );
          }
          
    return <div> {content}</div>;
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  // auth: state.auth,
  profile: state.profile,
  post: state.post,
});
export default connect(mapStateToProps, {
  getCurrentProfile,
  getUserPosts,
})(CurrentProfile);

