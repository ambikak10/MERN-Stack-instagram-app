import React, { Component, Fragment } from 'react'
import CommentItem from './CommentItem';
import { Link } from "react-router-dom";

class Comments extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       follow: false,
//       viewAllComments: false,
//     };
//   }
//  toggleComments = (e) => {
//     this.setState({
//       viewAllComments: !this.state.viewAllComments,
//     });
//   };
       
  render() {
    const {postId} = this.props;
    let filterComments =  this.props.comments.filter((comment, index) => index <=2) //filtering to get only first 3 comments
    // let comments;
    let first3comments;
     first3comments = filterComments.map(comment => (
        <CommentItem key={comment.id} comment={comment} postId={this.props.postId}
         showAvatar={this.props.showAvatar}
          showDelete={this.props.showDelete}/>
      ));
 
      //  comments = this.props.comments.map(comment => (
      //   <CommentItem key={comment.id} comment={comment} postId={this.props.postId}
      //    showAvatar={this.props.showAvatar}
      //     showDelete={this.props.showDelete}/>
      // ));
    
    
    return (
      <div>
        <Link
          to={`/post/${postId}`}
          // type='button'
          // onClick={(e) => {
          //   this.toggleComments();
          //   console.log(this.state.viewAllComments);
          // }}
          style={{ color: "gray", marginLeft: "25px" }}
        >
          View all comments
        </Link>
        {first3comments}

        {/* {this.state.viewAllComments && <Fragment>{comments} </Fragment>}*/}
      </div>
    );
  }
}

export default Comments;
    