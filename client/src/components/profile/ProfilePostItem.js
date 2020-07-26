import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "./profile.css";
import Spinner from "../common/Spinner";


 class ProfilePostItem extends Component {
  render() {
    const {post} = this.props.post;
    return (
      <div>
          <section className='row hover-effect'>
            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='/post'>
                <figure>
                  <img
                    src={post.image}
                    alt=''
                  />
                </figure>
              </Link>
            </div>
{/* 
            <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
              <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                <figure>
                  <img
                    src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                    alt=''
                  />
                </figure>
              </Link>
            </div> */}
          </section>
        </div>
    )
  }
}
export default (ProfilePostItem);
