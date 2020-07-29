import React, { Component } from 'react';
import './profilepicture.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from 'react-router';



class profilepicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",  
      showDefault: true,
      fileUploadState: "" ,
      
      
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.inputReference = React.createRef();
  }
  
  
  
  uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "instagram");

    // POST image to cloudinary through the cloudinary API and append image
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/instagramteam/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    // Fetch result
    const result = await res.json();

    // Update the image state to the fetched result url

    this.setState({
      image: result.secure_url, //secure.url is a property of fetch result
      showDefault: false,
    });
  };
  onChange = (e) => this.setState({ fileUploadState: e.target.value });
  onClick = (e) => {
    this.inputReference.current.click();    
    const changeAvatar = {      
      image: this.state.image,
    };
    axios
      .post("/api/users/editAvatar", changeAvatar)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
    this.props.history.push('/profile');
    
    

   };

  render() {
  
    if (!this.props.change) {
      return null;
    }    
    return (  
      <div className='firstset'>   
      <div className='secondsetupload'>
        <div className='thirdset'>
          <div className='containerset' style={{ height: "220px" ,
        width: "400px"}}>
              <div 
              style={{
                marginLeft: "102px",
                marginTop: "30px",
                marginBottom: "20px",
                borderTopRightRadius: "15px",                
                fontSize: "20px"
              }}>
                Change Profile Photo
              </div>
              <hr style={{marginBottom: "0" }}/>
              <div>
              <input
                  type="file" hidden ref={this.inputReference} onChange={this.uploadImage}
                  onClick= {this.props.close}            
              />    
              <button
                onClick={this.onClick} 
                className='w3-button w3-block'
                style={{
                  color: "blue",

                }}
              >
                Upload photo
                {/* {this.state.fileUploadState} */}
              </button>         
             </div>
              <hr style={{ marginTop: "0", marginBottom: "0" }}/>
              <button
                onClick={this.props.onDelete}
                className='w3-button w3-block'
                style={{
                color: "red",      
                  
                }}
              >
                Remove current photo
              </button>
              <hr style={{ marginTop: "0", marginBottom: "0"}}/>
              <button
                onClick={this.props.close}
                style={{
                  borderBottomRightRadius: "15px",
                  borderBottomLeftRadius: "15px"
                }}
                className='w3-button w3-block'
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

export default (withRouter(profilepicture));
