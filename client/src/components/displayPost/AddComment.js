import React, { Component } from 'react'

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {

  }
  onSubmit() {
    
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          className='comment-textarea'
          type='text'
          placeholder='Add a comment..'
          value={this.state.comment}
          onChange={this.onChange}
        ></textarea>
        <input 
          type="submit" 
          className='post'
          value="Post"
        />
      </form>
    )
  }
}

export default AddComment
