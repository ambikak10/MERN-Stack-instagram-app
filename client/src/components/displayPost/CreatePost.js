import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../img/defaultImage.jpg";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      showDefault: true,
      tagged: []
    };
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage(e) {
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
      showDefault: false
    });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "30px"}}>
        <div className="row">
          <div className="col-md-4 col-sm-12 d-flex flex-column">
            <input type="file" onChange={this.uploadImage} style={{marginBottom: "20px", marginTop: "10px"}}/>
            <img src={this.state.image} style={{width: "100%"}}/>
            {this.state.showDefault && <img src={defaultImage} className="create-post-default-image-style" alt="default image"/>}
          </div>
          <div className="d-flex flex-column col-md-8 col-sm-12">
            <p style={{fontSize: "1.75rem"}}>Create New Post</p>
            <form>
              <div className='form-group'>
                <label className="col-form-label">Description</label>
                <textarea
                  type='text'
                  className='form-control'
                  name='text'
                  placeholder="Description"
                  style={{width: "93%", height: "200px"}}
                />
              </div>
              
              <div style={{marginTop: "30px"}}>
                <input
                    type='submit'
                    value='Post'
                    className='btn btn-primary'
                    style={{marginRight: "10px"}}
                  />
                <Link to="/profile" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;
