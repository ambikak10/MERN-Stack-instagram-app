import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import avatar from '../../img/avatar.png';

class CommentItem extends Component {
  render() {
    let deleteIcon = (
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
    return (
      <div className="container">
        <section className='row'>
        <div className='col-lg-2'>
          <Link to='#'>
            <img className='avatar-icon' src={avatar} alt='Avatar' />
          </Link>
        </div>
        <div className='col-lg-8'>
          <div id='col-space'>
            <Link to='' className='handlename-post'>
              user1
            </Link>
            <span className='textStyle-comment'>
              &nbsp; Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit es
            </span>
          </div>
        </div>
        {deleteIcon}
      </section>
      </div>
      
    )
  }
}

export default CommentItem;

