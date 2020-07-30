import React, { Component } from 'react';
import './profilepicture.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { addPicture } from "../../actions/authActions";


class profilepicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",  
      showDefault: true,
      fileUploadState: "" ,
      fileData: new FormData()
      
      
    };
    //this.uploadImage = this.uploadImage.bind(this);
    //this.inputReference = React.createRef();
    //this.onClick = this.onClick.bind(this);
  }
  
  
  
  // uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "instagram");
  //   this.setState({
  //     fileData: data,
  //     showDefault: false,
  //     image: URL.createObjectURL(e.target.files[0])
  //   });
  // };
  // onChange(e) {
  //   this.setState({ fileUploadState: e.target.value });
  // }
  // onSubmit(e) {
  //   //this.inputReference.current.click();    
  //   e.preventDefault();
  //   //POST image to cloudinary through the cloudinary API and append image
  //   fetch(
  //     "https://api.cloudinary.com/v1_1/instagramteam/image/upload",
  //     {
  //       method: "POST",
  //       body: this.state.fileData,
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       const newPicture = {          
  //         image: result.secure_url
  //       };

  //       this.props.addPicture(newPicture, this.props.history);
  //     })
    
 
  //   }

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
              
                <form onSubmit={this.onSubmit}>
              <input
                  type="file" hidden ref={this.inputReference} onChange={this.uploadImage}
                  onClick= {this.props.close}            
              />    
              <button
                  onClick={ this.uploadImage} 
                className='w3-button w3-block'
                style={{
                  color: "blue",

                }}
              >
                Upload photo
                 //{this.state.fileUploadState} 
              </button>         
             
             </form>
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
const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { addPicture })(withRouter(profilepicture));
