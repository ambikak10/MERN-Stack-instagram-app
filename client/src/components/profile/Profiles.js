import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import{getAllProfiles} from '../../actions/profileActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Profiles extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }
  render() {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const {profiles} = this.props.profile;
    console.log(this.props.profile.profiles);
    let content = profiles.map(profile => <ProfileCard profile={profile} key={profile._id}/>);

    return (
      <div className='container d-flex flex-wrap' style={{ marginTop: "30px" }}>
        {content}
      </div>
    );
  }
}
Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {
  getAllProfiles,
})(Profiles);
