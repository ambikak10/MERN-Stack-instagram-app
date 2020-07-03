import React, { Component } from 'react'
import avatar from "../../img/avatar.png";

class EditProfile extends Component {

  render() {
    return (
      <div style={{width: "70%", paddingTop: "30px", marginLeft: "auto", marginRight: "auto"}}>
        <div className="card">
          <div className='card-body' style={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
            <h3>Edit Profile</h3>
            <hr style={{marginBottom: "20px"}}/>

            <div className="row" style={{marginBottom: "20px"}}>
              <div className="col-lg-3">
                <img className="rounded-circle" src={avatar} alt="avatar" style={{width: "50px"}} />
              </div>
              <h6 className="col-lg-9" style={{paddingLeft: "0"}}>HandleName</h6>
            </div>
            
            <form action=''>
              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Username</label>
                <input
                  type='username'
                  className='form-control col-lg-9'
                  name='username'
                />
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Website</label>
                <input
                  type='website'
                  className='form-control col-lg-9'
                  name='website'
                />
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Bio</label>
                <textarea
                  type='bio'
                  className='form-control col-lg-9'
                  name='bio'
                />
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Phone</label>
                <input
                  type='phone'
                  className='form-control col-lg-9'
                  name='phone'
                />
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Gender</label>
                <input
                  type='gender'
                  className='form-control col-lg-9'
                  name='gender'
                />
              </div>

              <label className="col-form-label">Social Network Links</label>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Twitter</label>
                <div className="input-group col-lg-9" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Twitter URL" name="twitter" />
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Facebook</label>
                <div className="input-group col-lg-9" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Facebook URL" name="facebook" />
                </div>
              </div>

              <div className='form-group row'>
                <label className="col-lg-3 col-form-label">Youtube</label>
                <div className="input-group col-lg-9" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-youtube"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="YouTube URL" name="youtube" />
                </div>
              </div>
              <div style={{marginTop: "30px"}}>
                <input
                    type='submit'
                    value='Submit'
                    className='btn btn-primary'
                    style={{marginRight: "10px"}}
                  />
                <button className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProfile;