import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import { getOtherUsersPosts } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from '../../actions/profileActions';

class CurrentProfile extends Component {
  componentDidMount() {
  if (this.props.match.params.user_id) {
    this.props.getOtherUsersPosts(this.props.match.params.user_id);
  }
   if (this.props.match.params.handle) {
    this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    // console.log(this.props.profile.profile);
    const { profile, loading } = this.props.profile;
    let content;
    const { userPosts, loadingPost } = this.props.post;
    // console.log(userPosts);

    if (this.props.profile.profile != null) {
      content = (
        <div>
          <Profile
            profile={profile}
            loading={loading}
            othersUserPosts={userPosts}
            loadingPost={loadingPost}
          />
        </div>
      );
    } else {
      content = <Spinner />;
    }
    return <div> {content}</div>;
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  // getProfileByHandle: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  // getOtherUsersPosts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  // auth: state.auth,
  profile: state.profile,
  post: state.post,
});
export default connect(mapStateToProps, {
  getOtherUsersPosts,
  getProfileByHandle,
})(CurrentProfile);
