import React, { Component } from 'react'
import CommentItem from './CommentItem';

class Comments extends Component {
  
  render() {
    let comments;
    if (this.props.comments) {
      comments = this.props.comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} postId={this.props.postId}
        //  showAvatar={this.props.showAvatar}
          showDelete={this.props.showDelete}
          />
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
