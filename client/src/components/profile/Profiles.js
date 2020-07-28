import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProfileCard from './ProfileCard';
import{getAllProfiles} from '../../actions/profileActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Spinner from '../common/Spinner';
class Profiles extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }
  render() {
    let content;
    const {profiles, loading} = this.props.profile;
    console.log(this.props.profile.profiles);
    if(profiles === null || loading === true){
    content = <Spinner />;
    } else {
      content = profiles.map(profile => <ProfileCard profile={profile} key={profile._id}/>);
    }
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
