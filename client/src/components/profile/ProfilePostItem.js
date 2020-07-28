import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

class ProfilePostItem extends Component {

  render() {
      const { post, id, image } = this.props;

<<<<<<< HEAD
    // return this.props.posts.map((post) => {
=======
    return this.props.posts.map((post) => {
      let id = this.props.saved === false ? post._id : post.postId;
     
>>>>>>> 5c5cfeac4e699724636cb817ac4476840c921b53
      return (
        <div>
          <div id="posts"className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
            <Link to={`/post/${id}`}>
              <figure>
                <img src={image} alt='posts' />
              </figure>
            </Link>
          </div>
        </div>
      );
    // });
  }
}

export default ProfilePostItem;
