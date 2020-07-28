import React, { Component } from 'react';
import "./follow.css";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";
import FollowItem from './FollowItem';

class followers extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isToggleOn: true };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(function (prevState) {
  //     return { isToggleOn: !prevState.isToggleOn };
  //   });
  // }

  render() {
     if (!this.props.showFollowers) {
       return null;
     }
     const {followers, following} = this.props;
     const followingList= following.map(profile => profile.user);
     let content;
     if (followers.length > 0) {
       content = followers.map(follower => (
          <FollowItem key={follower.id} follow={follower} followingList={followingList}/>
       ))
     }
    return (
      <div className='first'>
        <div className='second'>
          <div className='third'>
            <div className='followers-container'>
              <h5>Followers </h5>
              <span>
                <Link onClick={this.props.close} class='X'>
                  X
                </Link>
              </span>
              <hr />

              <div className='container scrolling'>
                <div
                  className='row '
                  // style={{ marginBottom: "10px" }}
                  // style={{position: "relative"}}
                >
                  {content}
                </div>
              </div>
              {/* followers-container ends */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default followers;
