import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { connect } from "react-redux";
import SuggestionLists from "./SuggestionLists";
import { getSuggestionList } from "../../actions/profileActions";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Moment from "react-moment";
import { addLikePosts, removeLikePosts } from "../../actions/postActions";
import { savePosts, unsavePosts } from "../../actions/postActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

class PostItem extends Component {

  componentDidMount() {
    this.props.getSuggestionList();
  }
 
  render() {
    const { auth, profile } = this.props;
    const { post, loadingPost } = this.props;
    //Get avatar from redux store
    const avatar = profile.currentProfile ? profile.currentProfile.user.avatar : auth.user.avatar;

    let suggestionList;
    if (profile.profiles && profile.profiles.length > 0) {
      suggestionList = <SuggestionLists profiles={profile.profiles} />;
    }
    let alreadyLiked = false;
    if (post.likes !== undefined) {
      if (
        post.likes.filter((like) => like.user === this.props.auth.user.id)
          .length > 0
      ) {
        alreadyLiked = true;
      }
    }
    let alreadySaved = false;
    if (post.saved !== undefined) {
      if (
        post.saved.filter((save) => save.user === this.props.auth.user.id)
          .length > 0
      ) {
        alreadySaved = true;
      }
    }
 
    const icons = (
      <div>
        {alreadyLiked === true ? (
          <div type='button' className='icons-post'>
            <i
              onClick={() => {
                this.props.removeLikePosts(post._id);
              }}
              className='fa fa-heart'
              style={{ fontSize: "1.5em", color: "red" }}
              aria-hidden='true'
            ></i>
          </div>
        ) : (
          <div
            type='button'
            onClick={() => this.props.addLikePosts(post._id)}
            className='icons-post'
          >
            <i
              className='fa fa-heart-o'
              style={{ fontSize: "1.5em", color: "black" }}
              aria-hidden='true'
            ></i>
          </div>
        )}
        <div type='button' className='icons-post'>
          <i
            style={{ fontSize: "1.5em" }}
            className='fa fa-comment-o'
            aria-hidden='true'
          ></i>
        </div>
        {alreadySaved === true ? (
          <div type='button' className='icons-post'>
            <i
              onClick={() => {
                this.props.unsavePosts(post._id);
              }}
              className='fa fa-bookmark'
              style={{ fontSize: "1.5em" }}
              aria-hidden='true'
            ></i>
          </div>
        ) : (
          <div
            type='button'
            onClick={() => this.props.savePosts(post._id)}
            className='icons-post'
          >
            <i
              className='fa fa-bookmark-o'
              style={{ fontSize: "1.5em", color: "black" }}
              aria-hidden='true'
            ></i>
          </div>
        )}
      </div>
    );
    let content;
    if (loadingPost) {
      content = <Spinner />;
    } else {
      content = (
        <div className='container'>
          <div className='row>'>
            <div
              className='card offset-sm-1'
              style={{
                width: "600px",
                // border: "0.8px solid",
                borderColor: "#D3D3D3",
                position: "relative",
              }}
            >
              <div
                //  className='card-header'
                style={{ position: "relative" }}
              >
                <Link to={`/home/${post.handle}/${post.user}`}>
                  <img className='avatar-icon' src={post.avatar} alt='Avatar' />
                </Link>
                <Link
                  to={`/home/${post.handle}/${post.user}`}
                  className='name-of-account'
                >
                  {post.name}
                </Link>

                {/* <hr
                         style={{
                           marginBottom: "10px",
                         }}
                       /> */}
                <Link to={`/post/${post._id}`}>
                  {" "}
                  <img
                    className='card-img-top'
                    style={{
                      borderTop: "1px solid rgba(var(--b6a,219,219,219)",
                      marginTop: "20px",
                      borderRadius: "0",
                      width:"600px",
                      height: "600px",
                      objectFit: "cover"
                    }}
                    src={post.image}
                  />{" "}
                </Link>

                {/*  post description & comments on post */}
                <div
                  // className='comment-wrapper'
                  style={{
                    // border: "0.8px solid rgb(211, 211, 211)",
                    borderTop: "transparent",
                  }}
                >
                  <section className='row'>
                    <section id='icons'>
                      {/* Show like, save icons */}
                      {icons}

                      <div className='textStyle-date'>
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: "1.4em",
                            color: "black",
                            marginLeft: "10px",
                          }}
                        >
                          {post.likes && post.likes.length} Likes
                        </div>
                      </div>
                    </section>
                    {/* <!-- post description start--> */}
                    <div className=' col-lg-10'>
                      <div id='col-space'>
                        <Link
                          className='handlename-post'
                          to={`/home/${post.handle}/${post.user}`}
                        >
                          {post.name}
                        </Link>
                        <span className='textStyle-comment'>
                          &nbsp; {post.text}
                        </span>
                      </div>
                    </div>
                    {/* <!-- post description end--> */}
                    {/* comments on post */}

                    <Comments
                      comments={post.comments}
                      postId={post._id}
                      showAvatar={true}
                      showDelete={true}
                    />
                  </section>
                  <hr />

                  <AddComment postId={post._id} />
                </div>
              </div>
            </div>

            {/* Suggestions*/}
            <div
              className='card sticky-top d-none d-xl-block'
              style={{
                marginTop: "60px",
                marginLeft: "20px",
                backgroundColor: "#fafafa",
                width: "300px",
                height: "500",
                border: "none",
                position: "fixed",
                right: "280px",
                marginTop: "65px",
              }}
            >
              {/* Avatar of current user */}
              <div
                // className='card-header'
                style={{
                  backgroundColor: "#fafafa",
                  border: "none",
                }}
              >
                <Link to='/current-profile'>
                  <img
                    className='avatar-icon'
                    src={avatar}
                    alt='Avatar'
                    style={{
                      marginLeft: ".5px",
                      width: "60px",
                    }}
                  />
                </Link>
                <Link to='/current-profile' className='name-of-account'>
                  {auth.user.name}
                </Link>
              </div>

              {/* Suggestions lists */}
              <div
                style={{
                  marginLeft: "10px",
                  color: "gray",
                  fontWeight: "600",
                }}
              >
                Suggestions For You
                <Link to='/explore' style={{ float: "right", color: "black" }}>
                  See All
                </Link>
              </div>

              {/* <SuggestionLists profiles={profile.profiles}/> */}
              {suggestionList}
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getSuggestionList,
  addLikePosts,
  removeLikePosts,
  savePosts,
  unsavePosts,
})(PostItem);
