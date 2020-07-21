import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png"
import "./home.css"; 
import Navbar from '../navbar/Navbar';

export class home extends Component {
         constructor() {
           super();
           this.state = {
             follow: false,
           };
           this.handleFollow = this.handleFollow.bind(this);
           this.handleUnfollow = this.handleUnfollow.bind(this);
         }

         handleFollow() {
           this.setState({ follow: true });
         }

         handleUnfollow() {
           this.setState({ follow: false });
         }
         render() {
           
           return (
             <div className='container'>
               <div className='row'>
                 <div className='col-sm-6'>
                   <div className='card-home'>
                     <div className='card-header'>
                       <Link to='#'>
                         <img
                           className='avatar-icon'
                           src={avatar}
                           alt='Avatar'
                           style={{ marginLeft: ".5px" }}
                         />
                       </Link>
                       <Link to='' className='name-of-account'>
                         user007
                       </Link>
                     </div>
                     <img
                       class='card-img-top'
                       src='https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80'
                     />
                     <div classname='card-body'>
                       <section id='icons'>
                         <Link to=''>
                           <i
                             className='fa fa-heart-o fa-2x'
                             style={{
                               color: "black",
                               marginRight: "20px",
                               fontSize: "1.4em",
                             }}
                           ></i>
                         </Link>
                         <Link to=''>
                           <i
                             className='fa fa-comment-o '
                             style={{
                               color: "black",
                               marginRight: "20px",
                               fontSize: "1.4em",
                             }}
                           ></i>
                         </Link>
                         <Link to=''>
                           <i
                             className='fa fa-paper-plane-o'
                             style={{
                               color: "black",
                               marginRight: "400px",
                               fontSize: "1.4em",
                             }}
                           ></i>
                         </Link>
                         <Link to=''>
                           <i
                             className='fa fa-bookmark-o'
                             style={{ color: "black", fontSize: "1.4em" }}
                           ></i>
                         </Link>
                         <div className='textStyle-date'>
                           <div
                             style={{
                               fontWeight: "600",
                               fontSize: "1.4em",
                               color: "black",
                             }}
                           >
                             10,000 Likes
                           </div>
                         </div>
                         <div>
                           <Link class='handlename-post' to=''>
                             user007
                           </Link>
                           <span class='textStyle-comment'>
                             &nbsp; Love is in the air
                           </span>
                         </div>
                         <div>
                           <Link to='' className='handlename-post'>
                             user1
                           </Link>
                           <span className='textStyle-comment'>
                             &nbsp; calm and serene
                             <Link to=''>
                               <i
                                 className='fa fa-heart-o fa-2x'
                                 style={{
                                   color: "gray",
                                   float: "right",
                                   fontSize: "1em",
                                 }}
                               ></i>
                             </Link>
                           </span>
                         </div>
                         <div>
                           <div
                             style={{
                               fontSize: ".7em",
                               color: "grey",
                               marginTop: "20px",
                             }}
                           >
                             20 HOURS AGO
                           </div>
                         </div>
                       </section>
                     </div>
                     <br />
                     <div class='card-footer'>
                       <div
                         style={{
                           fontSize: "1em",
                           color: "grey",
                           marginTop: "10px",
                         }}
                       >
                         Add a comment
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className='col-sm-6'>
                   <div
                     className='card-home d-none d-xl-block'
                     style={{
                       marginTop: "20px",
                       backgroundColor: "#fafafa",
                       width: "300px",
                       height: "400px",
                       border: "none",
                     }}
                   >
                     <div
                       className='card-header'
                       style={{
                         backgroundColor: "#fafafa",
                         border: "none",
                       }}
                     >
                       <Link to='#'>
                         <img
                           className='avatar-icon'
                           src={avatar}
                           alt='Avatar'
                           style={{
                             marginLeft: ".5px",
                             width: "60px",
                           }}
                         />
                       </Link>
                       <Link to='' className='name-of-account'>
                         user007
                       </Link>
                     </div>

                     <div
                       style={{
                         marginLeft: "10px",
                         color: "gray",
                         fontWeight: "600",
                       }}
                     >
                       Suggestions For You
                       <span style={{ float: "right", color: "black" }}>
                         See All
                       </span>
                     </div>

                     <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                       <Link to='/profile'>
                         <img
                           className='rounded-circle profile-card-avatar'
                           style={{ width: "50px" }}
                           src={avatar}
                           alt='avatar'
                         />
                       </Link>
                       <span
                         style={{
                           marginLeft: "10px",
                           color: "black",
                           fontFamily: "inherit",
                           fontWeight: "600",
                           textTransform: "lowercase",
                         }}
                       >
                         BruceLee
                       </span>
                       <span style={{ float: "right", marginTop: "10px" }}>
                         {!this.state.follow && (
                           <Link onClick={this.handleFollow}>Follow</Link>
                         )}
                         {this.state.follow && (
                           <Link onClick={this.handleUnfollow}>Following</Link>
                         )}
                       </span>
                     </div>

                     <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                       <Link to='/profile'>
                         <img
                           className='rounded-circle profile-card-avatar'
                           style={{ width: "50px" }}
                           src={avatar}
                           alt='avatar'
                         />
                       </Link>
                       <span
                         style={{
                           marginLeft: "10px",
                           color: "black",
                           fontFamily: "inherit",
                           fontWeight: "600",
                           textTransform: "lowercase",
                         }}
                       >
                         HarryPotter
                       </span>
                       <span style={{ float: "right", marginTop: "10px" }}>
                         {!this.state.follow && (
                           <Link onClick={this.handleFollow}>Follow</Link>
                         )}
                         {this.state.follow && (
                           <Link onClick={this.handleUnfollow}>Following</Link>
                         )}
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           );
         }
       }
            

            


            

            
    
  


export default home;
