import React, { Component } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { connect } from "react-redux";
import { getPost, deletePost } from "../../actions/postActions";
import Moment from "react-moment"; 
import Spinner from "../common/Spinner";
import {addLike, removeLike} from "../../actions/postActions" 

class Post extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id, this.props.history);
  }

  goBack() {
    this.props.history.goBack();
  }
  onDeletePost(postId, history) {
    this.props.deletePost(postId, history);
  }

  render() {
    const {post, loadingPost} = this.props.post;
    const postId = this.props.match.params.id;
    let deleteIcon;
    let alreadyLiked = false;
    let likesUserIds;

    // console.log(this.props.post.post.likes);
    // console.log(post.likes.length);
    if(post.likes !== undefined) {
      // console.log(post.likes)
      console.log(this.props.auth.user.id);
      console.log(post.likes);

    if(post.likes.filter(like => like.user === this.props.auth.user.id).length > 0)
    {
      alreadyLiked = true;
      // console.log("hi")
    }
    // console.log(likesUserIds);
    // if(likesUserIds.indexOf(this.props.auth.user.id )) {
    //   liked = true;
    // }
    console.log(alreadyLiked);
   }

     if (post.user === this.props.auth.user.id) {
       deleteIcon = (
         <div
           type='button'
           className='delete-post'
           onClick={this.onDeletePost.bind(this, post._id, this.props.history)}
         >
           <i
             style={{
               fontSize: "1.5em",
               float: "right",
               padding: "5px",
               marginTop: "-3px",
               fontWeight: "lighter",
             }}
             className='fa fa-trash'
             aria-hidden='true'
           ></i>
         </div>
       );
     }
    const icons = (
      <div>
        {alreadyLiked === true ? (
          <div type='button' className='icons-post'>
            <i
              onClick={() => {
                this.props.removeLike(post._id);
              }}
              className='fa fa-heart'
              style={{ fontSize: "1.5em", color: "red" }}
              aria-hidden='true'
            ></i>
          </div>
        ) : (
          <div
            type='button'
            onClick={() => this.props.addLike(post._id)}
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

        <div type='button' className='icons-post'>
          <i
            style={{ fontSize: "1.5em" }}
            className='far fa-user-circle'
            aria-hidden='true'
          ></i>
        </div>
        <div type='button' className='icons-post'>
          <i
            style={{ fontSize: "1.5em" }}
            className='fa fa-bookmark-o'
            aria-hidden='true'
          ></i>
        </div>

        {/* delete post */}
        {deleteIcon}
      </div>
    );

    let content;
    if (loadingPost) {
      content = <Spinner />
    } else {
      content = (
        <div className='child'>
          <span className='close'>
            <button onClick={this.goBack}>
              <i className='fa fa-times' aria-hidden='true'></i>
            </button>
          </span>

          <div className='container-post'>
            <img
              className='size-of-image'
              src={post.image}
            />
            <div className='style d-none d-xl-block d-md-none d-lg-none d-sm-none '>
              <Link to='#'>
                <img className='avatar-icon' src={post.avatar} alt='Avatar' />
              </Link>
              <Link to='' className='name-of-account'>
                {post.name}
              </Link>
              <hr style={{ marginBottom: "10px" }} />

              {/*  post description & comments on post */}
              <div className='comment-wrapper'>
                <section className='row'>
                  {/* <!-- post description start--> */}

                  <div className='col-lg-2'>
                    <Link to='#'>
                      <img className='avatar-icon' src={post.avatar} alt='Avatar' />
                    </Link>
                  </div>
                  <div className='col-lg-10'>
                    <div id='col-space'>
                      <Link className='handlename-post' to=''>
                        {post.name}
                      </Link>
                      <span className='textStyle-comment'>
                        &nbsp; {post.text}
                      </span>
                    </div>
                  </div>
                  {/* <!-- post description end--> */}

                  {/* comments on post */}
                  <Comments comments={post.comments} postId={postId} showAvatar={true}/>
                </section>
              </div>

              <div id='footer'>
                <hr />
                <section>
                  {/* Show like, save, delete icons */}
                  {icons}
                </section>
                <div className='post-textStyle-date'>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "1.4em",
                      color: "black",
                    }}
                  >
                    {post.likes && post.likes.length} Likes
                  </div>
                  <Moment format="D MMM YYYY">{post.date}</Moment>
                </div>
                <hr />
                <AddComment postId={postId}/>
                
              </div>
            </div>
          </div>

          {/* section only for mobiles*/}

          <div id='wrapper'>
            <section className='section-only-mobile d-xl-none'>
              <section>
                {/* Show like, save, delete icons */}
                {icons}
              </section>

              <p className='post-textStyle-date'>
              <Moment format="D MMM YYYY">{post.date}</Moment> &nbsp; <span>{post.likes && post.likes.length} Likes</span>
              </p>
              <AddComment />
              
            </section>
          </div>
        </div>
      );
    }

    return (
      <div className='parent'>
        {content}
      </div>
    );
  }
}

// Profile.propTypes = {
  
//   auth: PropTypes.object.isRequired,
  
//   logoutUser: PropTypes.func.isRequired,
// };
const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost, deletePost, addLike, removeLike })(Post);
