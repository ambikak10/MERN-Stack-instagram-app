import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { allPostsExceptCurrentUsers, getFollowingPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    // this.props.allPostsExceptCurrentUsers();
    this.props.getFollowingPosts();
  }

  render() {
    const { posts, loadingPost } = this.props.post;
    let postContent;

    if (loadingPost) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { allPostsExceptCurrentUsers, getFollowingPosts })(Posts);
