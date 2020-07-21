import React, { Component } from "react";
import "./settings.css";


class Settings extends Component {
  
cancel = () => {
   this.props.history.push("/profile");
}
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

              <button
               onClick={this.cancel}
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  lineHeight: "30px"
                }}
                className='w3-button w3-block w3-white '
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
