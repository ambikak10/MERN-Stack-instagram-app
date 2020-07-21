import React, { Component } from "react";
import "./settings.css";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";

class Settings extends Component {
  

  render() {
    return (
      <div className='firstset'>
        <div className='secondset'>
          <div className='thirdset'>
            <div className='followers-containerset' style={{ height: "150px" }}>
              <button
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
                className='w3-button w3-block w3-white'
              >
                Log Out
              </button>

              <button className='w3-button w3-block w3-white'>
                Delete account
              </button>

              <Link
                to='/profile'
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  lineHeight: "30px"
                }}
                className='w3-button w3-block w3-white look'
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
