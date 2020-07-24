import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import defaultImage from "../../img/defaultImage.jpg";
import classnames from 'classnames';
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      showDefault: true,
      text: "",
      errors: {}
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  // Get user uploaded file
  uploadImage = e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "instagram");

    // POST image to cloudinary through the cloudinary API and append image

    fetch(
      "https://api.cloudinary.com/v1_1/instagramteam/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    .then(res => res.json())
    .then(result => {
      this.setState({
        image: result.secure_url, //secure.url is a property of fetch result
        showDefault: false,
      });
    })
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newPost = {
      image: this.state.image,
      text: this.state.text
    };

    this.props.addPost(newPost, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="container" style={{marginTop: "30px"}}>
        <div className="row">
          <div className="col-md-4 col-sm-12 d-flex flex-column">

            <input
              type='file'
              name='file'
              onChange={this.uploadImage}
              style={{ marginBottom: "20px", marginTop: "10px" }}
              accept="image/*"
            />
            
            {this.state.image && <img src={this.state.image} style={{width: "100%", marginTop: "20px"}}/>}
            {this.state.showDefault && <img src={defaultImage} className="create-post-default-image-style" alt="default image"/>}
            {errors.image && (
              <div style={{color: "red", fontSize: "80%"}}>{errors.image}</div>
            )}
          </div>
          <div className="d-flex flex-column col-md-8 col-sm-12">
            <p style={{fontSize: "1.75rem"}}>Create New Post</p>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label className="col-form-label">Description</label>
                <textarea
                  type='text'
                  name='text'
                  placeholder="Description"
                  style={{width: "93%", height: "200px"}}
                  value={this.state.text}
                  onChange={this.onChange}
                  className={classnames("form-control ", {
                    "is-invalid": errors.text,
                  })}
                />
                {errors.text && (
                  <div className='invalid-feedback'>{errors.text}</div>
                )}
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

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(withRouter(CreatePost));
