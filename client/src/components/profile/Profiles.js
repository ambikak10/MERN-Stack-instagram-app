import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard';

class Profiles extends Component {
  render() {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const profiles = arr.map(item => (
      <ProfileCard />
    ));

    return (
      <div className="container d-flex flex-wrap" style={{marginTop: "30px"}}>
        {profiles}
      </div>
    )
  }
}

export default Profiles;
