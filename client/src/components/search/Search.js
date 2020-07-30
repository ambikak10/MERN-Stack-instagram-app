import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./search.css";
import { getSuggestionList } from "../../actions/profileActions";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Spinner from '../common/Spinner';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      searchInput: ""
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true, searchInput: event.target.value }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    this.props.getSuggestionList();
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false, searchInput: "" }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  searchClick(event) {
    this.closeMenu(event);
  }

  render() {
    const {profiles, loading} = this.props.profile;
    let content;
    if(profiles === null || loading){
      content = <Spinner />;
    }
    if(profiles !== null && profiles.length > 0) {
      console.log(profiles);
      content = profiles.map(profile =>  {
        return (
        <Link to={`/profile/${profile.handle}/${profile.user._id}`} className="searchOption" onClick={this.searchClick.bind(this)}>
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
      )});
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
          value={this.state.searchInput}
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