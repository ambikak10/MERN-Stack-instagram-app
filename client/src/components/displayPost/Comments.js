import React, { Component } from 'react'
import CommentItem from './CommentItem';

class Comments extends Component {
  
  render() {
    let comments;
    if (this.props.comments) {
      comments = this.props.comments.map(comment => (
        <CommentItem key={comment.id} comment={comment}/>
      ));
    }
    
    return (
      <div>
        {comments}
      </div>
    )
  }
}

export default Comments
