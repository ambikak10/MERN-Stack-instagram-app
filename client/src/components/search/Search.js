import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./search.css";
import { getSuggestionList } from "../../actions/profileActions";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Spinner from '../common/Spinner';

class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.props.getSuggestionList();
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    const {profiles, loading} = this.props.profile;
    let content;
    if(profiles === null || loading){
      content = <Spinner />;
    }
    if(profiles !== null && profiles.length > 0) {
      console.log(profiles);
      content = profiles.map(profile => (
        <Link to={`/profile/${profile.handle}/${profile.user._id}`} className="searchOption">
          <div className="searchData">
            <div className="searchAvatarBox">
              <img className="searchAvatar" src={profile.user.avatar}/>
            </div>
            <div className="searchNameBox">
              <div className="searchName">{profile.user.name}</div>
              <div className="searchHandle">{profile.handle}</div>
            </div>
          </div>
        </Link>
      ));
    } 
    
    if (profiles !==null && profiles.length === 0){
      content = <div style={{textAlign: "center", fontSize: "22px"}}>No search result</div>
    }

    return (
      <div className="searchBox">
        <span className='fa fa-search searchIcon'></span>
        <input
          className='searchInput'
          type='search'
          placeholder='Search..'
          onChange={this.showMenu}
        />
        
        {
          this.state.showMenu
            ? (
              <div className="searchDropDown">
                <div
                  className="searchDropDownMenu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="searchOptions">
                    {content}
                  </div>
                  
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {
  getSuggestionList,
})(Search);