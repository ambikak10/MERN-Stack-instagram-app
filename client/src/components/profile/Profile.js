import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import avatar from "../../img/avatar.png";
import "./profile.css";
import Settings from "./Settings";
import Followers from "../follow/Followers";
import Following from "../follow/Following";

export class profile extends Component {
         state = {
           show: false,
           showFollowers: false,
           showFollowing: false,
         };
         showFollowersList = (e) => {
           this.setState({
             showFollowers: !this.state.showFollowers,
           });
         };
         showFollowingList = (e) => {
           this.setState({
             showFollowing: !this.state.showFollowing,
           });
         };
         showSettings = (e) => {
           this.setState({
             show: !this.state.show,
           });
         };

         render() {
           return (
             <div>
               {/* <Navbar /> */}

               <div className='container'>
                 <div className='margin'>
                   <div>
                     <Link to=''>
                       <img
                         className='profile-photo'
                         alt='profile-photo'
                         src={avatar}
                       />
                     </Link>
                   </div>
                   <div className='d-flex flex-column space'>
                     <h2 className='HandleName'>
                       HandleName
                       <span>
                         <Link
                           to='/edit-profile'
                           type='button'
                           className='btn profileButton'
                         >
                           Edit profile
                         </Link>
                         <Link onClick={(e) => this.showSettings()}>
                           <i
                             style={{ fontSize: "1.5rem", color: "black" }}
                             className='fas fa-cog'
                           ></i>
                         </Link>
                         <Settings
                           show={this.state.show}
                           close={this.showSettings}
                         />
                       </span>
                     </h2>
                     <p className='textsize'>
                       <span>
                         <Link to='#'>
                           <b>2</b> posts
                         </Link>
                         &nbsp; &nbsp; &nbsp;&nbsp;
                         <Link onClick={(e) => this.showFollowersList()}>
                           <b>200</b> followers
                         </Link>{" "}
                         <Followers
                           showFollowers={this.state.showFollowers}
                           close={this.showFollowersList}
                         />
                         &nbsp; &nbsp; &nbsp;
                         <Link onClick={(e) => this.showFollowingList()}>
                           <b>20</b> following
                         </Link>
                         <Following
                           showFollowing={this.state.showFollowing}
                           close={this.showFollowingList}
                         />
                       </span>
                     </p>
                     <p className='profileName'>
                       <strong>username</strong>
                     </p>
                     <br />
                     {/* rendered only if user has information */}

                     <div
                       style={{ wordBreak: "break-all", marginTop: "-40px" }}
                     >
                       developer developer developer developer
                     </div>
                     <span>
                       <a
                         href='https://www.youtube.com/'
                         style={{ color: "rgba(var(--fe0,0,55,107),1)" }}
                       >
                         https://www.youtube.com/
                       </a>
                     </span>
                     {/* link somehow doesn't connect to external websites, so chnaged to anchor tag  */}

                     {/* Social network Links */}
                     <span>
                       <a href='https://www.facebook.com/'>
                         <i className='fa fa-facebook-square'></i>
                       </a>
                       <a href="user's youtube link from API">
                         <i
                           className='fa fa-youtube-play youtube'
                           aria-hidden='true'
                         ></i>
                       </a>
                       <a href="user's twitter link from API">
                         <i
                           className='fa fa-twitter twitter'
                           aria-hidden='true'
                         ></i>
                       </a>
                     </span>
                   </div>
                 </div>
                 <hr className='horizontalLine' />

                 <div className='profileTabs icons'>
                   <Link to=''>
                     <i className='fa fa-picture-o' aria-hidden='true'>
                       <span
                         style={{ marginLeft: "5px", fontFamily: "sans-serif" }}
                       >
                         POSTS
                       </span>
                     </i>
                   </Link>
                   <Link to='/create-post'>
                     <i className='far fa-plus-square'>
                       <span
                         style={{
                           marginLeft: "5px",
                           fontFamily: "sans-serif",
                         }}
                       >
                         ADD POST
                       </span>
                     </i>
                   </Link>
                   <Link to=''>
                     <i className='fa fa-bookmark-o' aria-hidden='true'>
                       <span
                         style={{ marginLeft: "5px", fontFamily: "sans-serif" }}
                       >
                         SAVED
                       </span>
                     </i>
                   </Link>
                   <Link to=''>
                     <i className='far fa-user-circle' aria-hidden='true'>
                       <span
                         style={{ marginLeft: "5px", fontFamily: "sans-serif" }}
                       >
                         TAGGED
                       </span>
                     </i>
                   </Link>
                 </div>

                 <section className='row hover-effect'>
                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='/post'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>

                   <div className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
                     <Link to='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'>
                       <figure>
                         <img
                           src='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/switzerland.jpg'
                           alt=''
                         />
                       </figure>
                     </Link>
                   </div>
                 </section>
               </div>
               {/* <Footer /> */}
             </div>
           );
         }
       }

export default profile;
