import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png"
import "./home.css"; 
import { connect } from "react-redux";
import SuggestionLists from "./SuggestionLists";
import { getSuggestionList } from "../../actions/profileActions";

class Home extends Component {
         constructor() {
           super();
           this.state = {
             follow: false,
           };
         }
         componentDidMount() {
           this.props.getSuggestionList();
         }
         
         render() {
           const {auth, profile} = this.props;
           
           let suggestionList;
           if (profile.profiles && profile.profiles.length > 0) {
            suggestionList = <SuggestionLists profiles={profile.profiles}/>
           } 

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
                       className='card-img-top'
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
                           <Link className='handlename-post' to=''>
                             user007
                           </Link>
                           <span className='textStyle-comment'>
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
                     {/* Avatar of current user */}
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
                           src={auth.user.avatar}
                           alt='Avatar'
                           style={{
                             marginLeft: ".5px",
                             width: "60px",
                           }}
                         />
                       </Link>
                       <Link to='' className='name-of-account'>
                          {auth.user.name}
                       </Link>
                     </div>
                    
                     {/* Suggestions lists */}
                     <div
                       style={{
                         marginLeft: "10px",
                         color: "gray",
                         fontWeight: "600",
                       }}
                     >
                       Suggestions For You
                       <Link to="/explore" style={{ float: "right", color: "black" }}>
                         See All
                       </Link>
                     </div>

                     {/* <SuggestionLists profiles={profile.profiles}/> */}
                     {suggestionList}
                   </div>
                 </div>
               </div>
             </div>
           );
         }
       }

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {getSuggestionList})(Home);
