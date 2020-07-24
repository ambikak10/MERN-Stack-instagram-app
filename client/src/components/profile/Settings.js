import React, { Component } from "react";
import "./settings.css";




class Settings extends Component {

  render() {
    if (!this.props.show) {
      return null;
    }
   
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

              <button onClick ={this.props.onDelete}className='w3-button w3-block w3-white'>
                Delete account
              </button>

              <button
                onClick={this.props.close}
                
                style={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  lineHeight: "30px",
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

export default (Settings);
