import React, { Component } from 'react';
import './profilepicture.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { addPicture,deletePicture } from "../../actions/authActions";


class profilepicture extends Component { 

  // uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "instagram");

  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/instagramteam/image/upload",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const result = await res.json();
  //   const newAvatar = {
  //     avatar: result.secure_url,
  //   };

  //   this.props.addPicture(newAvatar, this.props.history);
  // };
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  // onChange = (e) => {
  //   this.setState({ fileUploadState: e.target.value });
  // };
  // onClick = (e) => {
  //   this.inputReference.current.click();
  // };
  // onRemoveImage(history) {
  //   this.props.deletePicture(history);
  // }
  render() {
    if (!this.props.change) {
      return null;
    }    
    return (
      <div className='firstset'>
        <div className='secondsetupload'>
          <div className='thirdset'>
            <div
              className='containerset'
              style={{ height: "220px", width: "400px" }}
            >
              <div
                style={{
                  marginLeft: "102px",
                  marginTop: "30px",
                  marginBottom: "20px",
                  borderTopRightRadius: "15px",
                  fontSize: "20px",
                }}
              >
                Change Profile Photo
              </div>
              <hr style={{ marginBottom: "0" }} />
              <Link to='/upload'>
                <button                 
                  className='w3-button w3-block'
                  style={{
                    color: "blue",
                  }}
                >
                  Upload photo
                </button>
              </Link>              
              <hr style={{ marginTop: "0", marginBottom: "0" }} />
              <button
                onClick={this.props.remove} 
                className='w3-button w3-block'
                style={{
                  color: "red",
                }}
              >
                Remove current photo
              </button>
              <hr style={{ marginTop: "0", marginBottom: "0" }} />
              <button
                onClick={this.props.close}
                style={{
                  borderBottomRightRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
                className="w3-button w3-block"
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
const mapStateToProps = (state) => ({
  errors: state.errors
});
export default connect(mapStateToProps, { addPicture,deletePicture })(withRouter(profilepicture));
