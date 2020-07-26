import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { } from '../../actions/postActions';

class CommentItem extends Component {
  render() {
    const {comment, auth} = this.props;
    let deleteIcon;
    if (comment.user === auth.user.id) {
      deleteIcon = (
        <div className='col-lg-2'>
          <Link to='' className='delete-post'>
            <i
              style={{
                fontSize: "0.9em",
                float: "right",
                padding: "5px",
                marginTop: "-3px",
                fontWeight: "lighter",
              }}
              className='fa fa-trash'
              aria-hidden='true'
            ></i>
          </Link>
        </div>
      );
    }
    
    return (
      <div className="container">
        <section className='row'>
        <div className='col-lg-2'>
          <Link to='#'>
            <img className='avatar-icon' src={comment.avatar} alt='Avatar' />
          </Link>
        </div>
        <div className='col-lg-8'>
          <div id='col-space'>
            <Link to='' className='handlename-post'>
              {comment.name}
            </Link>
            <span className='textStyle-comment'>
              &nbsp; {comment.text}
            </span>
          </div>
        </div>
        {deleteIcon}
      </section>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommentItem);

