import React, { Component } from 'react'
import CommentItem from './CommentItem';

class Comments extends Component {
  
  render() {
    const arr = [1,2,3];
    let comments = arr.map(comment => (
      <CommentItem />
    ));
    return (
      <div>
        {comments}
      </div>
    )
  }
}

export default Comments
