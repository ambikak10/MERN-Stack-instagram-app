import React, { Component, Fragment } from "react";
import "./gallery.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {allPostsExceptCurrentUsers} from '../../actions/postActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner'
import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem';


class Gallery extends Component {
  componentDidMount() {
    this.props.allPostsExceptCurrentUsers();
  }
  render() {

    const { posts } = this.props.post;
    let imagesArray;
    if(posts.length > 0) {
    imagesArray = posts.map((post) => post.image);
    }
 
    return (
      <div className='container masonry'>
        {posts.length > 0 ? (
          <Fragment>
            {posts.map((post) => (
              <GalleryItem key={post._id} image={post.image} id={post._id} />
            ))}
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
} 
Gallery.propTypes = {
  allPostsExceptCurrentUsers: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  post: state.post
})
export default connect(mapStateToProps, { allPostsExceptCurrentUsers })(
  Gallery
);